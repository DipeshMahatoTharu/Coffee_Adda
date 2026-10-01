"use client";

import * as React from "react";
import { useReducedMotion } from "@/components/ui/text-animate-utils/use-reduced-motion";
import { cn } from "@/lib/utils";

type TextAnimateSegment = "char" | "word" | "line";

type TextAnimateEffectName =
  | "typewriter"
  | "scramble"
  | "rise"
  | "highlight"
  | "wave"
  | "flip"
  | "shimmer";

interface TextAnimateUnitContext {
  index: number;
  total: number;
  text: string;
  by: TextAnimateSegment;
  globalProgress: number;
  reduced: boolean;
}

type TextAnimateEffect = (
  progress: number,
  ctx: TextAnimateUnitContext,
) => {
  style?: React.CSSProperties;
  className?: string;
  content?: React.ReactNode;
};

type TextAnimateContainerEffect = (
  progress: number,
  ctx: { reduced: boolean },
) => {
  style?: React.CSSProperties;
  className?: string;
};

interface PresetConfig {
  fn: TextAnimateEffect;
  by: TextAnimateSegment;
  stagger: number;
  continuous: boolean;
  /**
   * Styles the wrapper around every unit rather than the units themselves, for effects that span the
   * whole string. Lets `by` stay orthogonal: the units can be split any way and the effect is unchanged.
   */
  container?: TextAnimateContainerEffect;
}

const SCRAMRAMBLE_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#%&@$?/<>*";
const SCRAMBLE_STEPS = 10;

const SHIMMER_SPREAD = "var(--text-shimmer-spread, calc(3ch + 40px))";
const SHIMMER_BASE =
  "var(--text-shimmer-base, color-mix(in oklab, currentColor 38%, transparent))";
const SHIMMER_GLARE = "var(--text-shimmer-glare, currentColor)";
const SHIMMER_MID = `color-mix(in oklab, ${SHIMMER_GLARE}, ${SHIMMER_BASE} 50%)`;
const SHIMMER_GRADIENT =
  `linear-gradient(calc(90deg + var(--text-shimmer-angle, 20deg)),` +
  ` ${SHIMMER_BASE} calc(50% - ${SHIMMER_SPREAD}),` +
  ` ${SHIMMER_MID} calc(50% - ${SHIMMER_SPREAD} * 0.5),` +
  ` ${SHIMMER_GLARE} 50%,` +
  ` ${SHIMMER_MID} calc(50% + ${SHIMMER_SPREAD} * 0.5),` +
  ` ${SHIMMER_BASE} calc(50% + ${SHIMMER_SPREAD}))`;

const presets: Record<TextAnimateEffectName, PresetConfig> = {
  typewriter: {
    by: "char",
    stagger: 1,
    continuous: false,
    fn: (p, ctx) => {
      const typed = p > 0;
      const head = Math.min(
        Math.floor(ctx.globalProgress * ctx.total),
        ctx.total - 1,
      );
      const onEdge = ctx.index === head && ctx.globalProgress < 1;
      const caret = (onEdge ||
        (ctx.globalProgress >= 1 && ctx.index === ctx.total - 1)) && (
        <span
          aria-hidden="true"
          className="motion-safe:animate-text-caret"
          style={{
            display: "inline-block",
            width: "0.08em",
            height: "1em",
            marginInlineStart: "0.04em",
            backgroundColor: "currentColor",
            verticalAlign: "text-bottom",
          }}
        />
      );
      return {
        content: (
          <>
            {typed ? ctx.text : ""}
            {caret}
          </>
        ),
      };
    },
  },

  scramble: {
    by: "char",
    stagger: 0.6,
    continuous: false,
    fn: (p, ctx) => {
      if (p >= 1 || ctx.text.trim() === "" || ctx.reduced) return {};
      const step = Math.floor(p * SCRAMBLE_STEPS);
      const glyph =
        SCRAMRAMBLE_CHARS[(ctx.index * 131 + step * 977) % SCRAMRAMBLE_CHARS.length];
      return { content: glyph, style: { opacity: 0.55 + p * 0.45 } };
    },
  },

  rise: {
    by: "char",
    stagger: 0.7,
    continuous: false,
    fn: (p, ctx) => {
      if (ctx.reduced) return {};
      const eased = 1 - Math.pow(1 - p, 3);
      return {
        style: {
          display: "inline-block",
          overflow: "hidden",
          verticalAlign: "bottom",
          paddingBottom: "0.12em",
          marginBottom: "-0.12em",
        },
        content: (
          <span
            style={{
              display: "inline-block",
              transform: `translateY(${((1 - eased) * 110).toFixed(2)}%)`,
            }}
          >
            {ctx.text}
          </span>
        ),
      };
    },
  },

  highlight: {
    by: "word",
    stagger: 0.85,
    continuous: false,
    fn: (p) => ({ style: { opacity: 0.18 + 0.82 * p } }),
  },

  wave: {
    by: "char",
    stagger: 0,
    continuous: true,
    fn: (_p, ctx) => {
      if (ctx.reduced) return {};
      const y = Math.sin(ctx.globalProgress * Math.PI * 2 + ctx.index * 0.55);
      return {
        style: {
          display: "inline-block",
          transform: `translateY(${(-y * 0.16).toFixed(3)}em)`,
        },
      };
    },
  },

  flip: {
    by: "char",
    stagger: 0.7,
    continuous: false,
    fn: (p, ctx) => {
      if (ctx.reduced) return {};
      return {
        style: {
          display: "inline-block",
          transformOrigin: "50% 0%",
          backfaceVisibility: "hidden",
          transform: `perspective(600px) rotateX(${((1 - p) * -90).toFixed(2)}deg)`,
          opacity: p < 0.5 ? p * 2 : 1,
        },
      };
    },
  },

  shimmer: {
    by: "line",
    stagger: 0,
    continuous: true,
    fn: () => ({}),
    container: (p, { reduced }) => {
      if (reduced) return {};
      return {
        style: {
          display: "inline-block",
          backgroundImage: SHIMMER_GRADIENT,
          backgroundRepeat: "no-repeat",
          // Wider than the box by a full band on each side, so both ends of the sweep park the
          // glare off-screen and wrapping the driver from 1 back to 0 is invisible.
          backgroundSize: `calc(200% + ${SHIMMER_SPREAD} * 2) 100%`,
          backgroundPosition: `${((1 - p) * 100).toFixed(3)}% 0`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
      };
    },
  },
};

interface BuiltChar {
  ch: string;
  index: number;
}
interface BuiltWord {
  text: string;
  index: number;
  chars: BuiltChar[] | null;
}
interface BuiltLine {
  text: string;
  index: number;
  words: BuiltWord[] | null;
}

function tokenize(
  text: string,
  by: TextAnimateSegment,
): { lines: BuiltLine[]; total: number } {
  let u = 0;
  const lines = text.split("\n").map<BuiltLine>((lineText) => {
    if (by === "line") {
      return { text: lineText, index: u++, words: null };
    }
    const words = (lineText.length ? lineText.split(" ") : [""]).map<BuiltWord>(
      (word) => {
        if (by === "word") {
          return { text: word, index: u++, chars: null };
        }
        const chars = Array.from(word).map<BuiltChar>((ch) => ({
          ch,
          index: u++,
        }));
        return { text: word, index: -1, chars };
      },
    );
    return { text: lineText, index: -1, words };
  });
  return { lines, total: u };
}

const MIN_UNIT_DURATION = 1e-4;

function clamp01(value: number): number {
  return value < 0 ? 0 : value > 1 ? 1 : value;
}

interface UnitProps {
  text: string;
  index: number;
  total: number;
  by: TextAnimateSegment;
  stagger: number;
  globalProgress: number;
  reduced: boolean;
  effect: TextAnimateEffect;
}

function Unit({
  text,
  index,
  total,
  by,
  stagger,
  globalProgress,
  reduced,
  effect,
}: UnitProps) {
  const start = (index / total) * stagger;
  const duration = Math.max(1 - stagger, MIN_UNIT_DURATION);
  const local = clamp01((globalProgress - start) / duration);

  const { style, className, content } = effect(local, {
    index,
    total,
    text,
    by,
    globalProgress,
    reduced,
  });

  return (
    <span data-slot="text-animate-unit" className={className} style={style}>
      {content === undefined ? text : content}
    </span>
  );
}

interface TextAnimateProps extends Omit<
  React.ComponentProps<"span">,
  "children"
> {
  /** The text to animate. Use `\n` for explicit line breaks. */
  children: string;
  /**
   * A preset name (`typewriter`, `scramble`, `rise`, `highlight`, `wave`, `flip`, `shimmer`) or a custom `(progress,
   * ctx) => {…}`.
   * @default 'typewriter'
   */
  effect?: TextAnimateEffectName | TextAnimateEffect;
  /**
   * Segmentation level. Defaults to the preset's natural level (e.g. `word` for `highlight`).
   * @default preset's level
   */
  by?: TextAnimateSegment;
  /** Controlled driver value (`0 → 1`). When set, the internal clock is disabled and you own the timeline. */
  progress?: number;
  /**
   * Run the built-in clock when `progress` is not provided.
   * @default true
   */
  autoPlay?: boolean;
  /**
   * Loop the built-in clock. Continuous presets (`wave`, `shimmer`) default to `true`.
   * @default preset's value
   */
  loop?: boolean;
  /**
   * Built-in clock length in **seconds**.
   * @default 1.6
   */
  duration?: number;
  /**
   * Built-in clock start delay in **seconds**.
   * @default 0
   */
  delay?: number;
  /**
   * How offset each unit's window is from its neighbor's, `0 → 1`. `0` = all together; `1` = fully sequential.
   * @default preset's value
   */
  stagger?: number;
}

function TextAnimate({
  children,
  effect = "typewriter",
  by,
  progress,
  autoPlay = true,
  loop,
  duration = 1.6,
  delay = 0,
  stagger,
  className,
  ...props
}: TextAnimateProps) {
  const reduced = useReducedMotion();
  const text = String(children);

  const preset = typeof effect === "string" ? presets[effect] : null;
  const effectFn = preset ? preset.fn : (effect as TextAnimateEffect);
  const segment = by ?? preset?.by ?? "char";
  const resolvedStagger = clamp01(stagger ?? preset?.stagger ?? 0.5);
  const shouldLoop = loop ?? preset?.continuous ?? false;

  const controlled = progress != null;

  const [clock, setClock] = React.useState(
    controlled ? clamp01(progress) : autoPlay ? 0 : 1,
  );

  const containerRef = React.useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = React.useState(true);
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver((entries) => {
      setVisible(entries[0]?.isIntersecting ?? true);
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  React.useEffect(() => {
    if (controlled || !autoPlay || reduced) return;
    if (shouldLoop && !visible) return;
    let raf = 0;
    let startedAt: number | null = null;
    const totalMs = Math.max(duration, 0.001) * 1000;
    const delayMs = Math.max(delay, 0) * 1000;

    const tick = (now: number) => {
      if (startedAt === null) startedAt = now + delayMs;
      const elapsed = now - startedAt;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const raw = elapsed / totalMs;
      const value = shouldLoop ? raw % 1 : Math.min(raw, 1);
      setClock(value);
      if (shouldLoop || raw < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [controlled, autoPlay, reduced, duration, delay, shouldLoop, visible]);

  const globalProgress = controlled ? clamp01(progress) : reduced ? 1 : clock;

  const { lines, total } = React.useMemo(
    () => tokenize(text, segment),
    [text, segment],
  );

  const unitProps = {
    total,
    by: segment,
    stagger: resolvedStagger,
    globalProgress,
    reduced,
    effect: effectFn,
  };
  const multiline = lines.length > 1;
  const container = preset?.container?.(globalProgress, { reduced });

  return (
    <span
      ref={containerRef}
      data-slot="text-animate"
      className={cn("inline-block", className)}
      {...props}
    >
      <span className="sr-only">{text}</span>
      <span
        aria-hidden="true"
        suppressHydrationWarning
        className={container?.className}
        style={container?.style}
      >
        {lines.map((line, li) => {
          const lineStyle = multiline
            ? ({ display: "block" } as const)
            : undefined;

          if (line.words === null) {
            return (
              <span key={li} style={lineStyle}>
                <Unit {...unitProps} text={line.text} index={line.index} />
              </span>
            );
          }

          return (
            <span key={li} style={lineStyle}>
              {line.words.map((word, wi) => {
                const sep = wi < line.words!.length - 1 ? " " : "";

                if (word.chars === null) {
                  return (
                    <React.Fragment key={wi}>
                      <Unit
                        {...unitProps}
                        text={word.text}
                        index={word.index}
                      />
                      {sep}
                    </React.Fragment>
                  );
                }

                return (
                  <React.Fragment key={wi}>
                    <span
                      style={{ display: "inline-block", whiteSpace: "pre" }}
                    >
                      {word.chars.map((c) => (
                        <Unit
                          {...unitProps}
                          key={c.index}
                          text={c.ch}
                          index={c.index}
                        />
                      ))}
                    </span>
                    {sep}
                  </React.Fragment>
                );
              })}
            </span>
          );
        })}
      </span>
    </span>
  );
}

export default TextAnimate;
export { TextAnimate };
export type {
  TextAnimateProps,
  TextAnimateEffect,
  TextAnimateEffectName,
  TextAnimateSegment,
  TextAnimateUnitContext,
};
