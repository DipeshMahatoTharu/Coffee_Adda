"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type AnimatedBannerProps = {
  title: string;
  subtitle?: string;
  badge?: string;
  ctaLabel?: string;
  href?: string;
  secondaryCtaLabel?: string;
  secondaryHref?: string;
  videoSrc: string;
  posterSrc?: string;
  /** Countdown target. Renders a DD:HH:MM:SS timer that ticks down to it. */
  deadline?: Date | number | string;
  /** Solid color faded from the text side of the banner. */
  overlayColor?: string;
  className?: string;
  onNavigate?: (page: string, anchor?: string) => void;
};

type TimeParts = { days: number; hours: number; minutes: number; seconds: number };

function getTimeParts(target: number): TimeParts {
  const diff = Math.max(0, target - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

function Countdown({ target }: { target: number }) {
  const [parts, setParts] = useState<TimeParts>(() => getTimeParts(target));

  useEffect(() => {
    setParts(getTimeParts(target));
    const timer = window.setInterval(() => {
      setParts(getTimeParts(target));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [target]);

  const segments = [parts.days, parts.hours, parts.minutes, parts.seconds];

  return (
    <div
      aria-hidden="true"
      className="flex shrink-0 items-center gap-1 font-mono text-xs sm:text-sm font-semibold tabular-nums text-white/95"
    >
      {segments.map((segment, index) => (
        <span className="flex items-center gap-1" key={index}>
          <span className="rounded-lg bg-black/40 border border-white/15 px-2 py-1 backdrop-blur-md shadow-xs">
            {pad(segment)}
          </span>
          {index < segments.length - 1 ? (
            <span className="text-brand-gold font-bold">:</span>
          ) : null}
        </span>
      ))}
    </div>
  );
}

export function AnimatedBanner({
  title,
  subtitle,
  badge,
  ctaLabel = "Explore Menu",
  href = "#menu",
  secondaryCtaLabel,
  secondaryHref = "#location",
  videoSrc,
  posterSrc,
  deadline,
  overlayColor = "rgba(20, 56, 38, 0.95)",
  className,
  onNavigate,
}: AnimatedBannerProps) {
  const target =
    deadline === undefined ? undefined : new Date(deadline).getTime();

  const handlePrimaryClick = (e: React.MouseEvent) => {
    if (onNavigate && href) {
      e.preventDefault();
      const page = href.replace('#', '') || 'menu';
      onNavigate(page);
    }
  };

  const handleSecondaryClick = (e: React.MouseEvent) => {
    if (onNavigate && secondaryHref) {
      e.preventDefault();
      const page = secondaryHref.replace('#', '') || 'location';
      onNavigate(page);
    }
  };

  return (
    <div
      className={cn(
        "group relative block w-full overflow-hidden rounded-3xl border border-brand-gold/30 shadow-2xl [--banner-overlay:var(--overlay)] transition-all duration-300",
        className,
      )}
      style={{ ["--overlay" as string]: overlayColor }}
    >
      {/* Background Cinematic Video */}
      <video
        aria-hidden="true"
        autoPlay
        className="absolute inset-0 h-full w-full object-cover scale-[1.02]"
        loop
        muted
        playsInline
        poster={posterSrc}
        src={videoSrc}
      />

      {/* Decorative Brand Accent Vector Circles in the background */}
      <div 
        aria-hidden="true" 
        className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full border border-brand-gold/15 pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="absolute -right-12 -bottom-12 w-80 h-80 rounded-full border border-brand-gold/20 pointer-events-none"
      />

      {/* Gradient Overlay: Deep rich brand-forest on the text side, gently translucent over video */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[var(--banner-overlay)] via-[var(--banner-overlay)]/90 sm:via-[var(--banner-overlay)]/80 to-black/40"
      />

      {/* Interactive hover depth glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[var(--banner-overlay)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-30"
      />

      {/* Content Layer */}
      <div className="relative z-10 flex min-h-[280px] sm:min-h-[320px] lg:min-h-[340px] flex-col justify-between p-6 sm:p-10 lg:p-12 text-white">
        
        {/* Top bar: Badge and optional countdown timer */}
        <div className="flex items-center justify-between gap-4">
          {badge ? (
            <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-brand-gold drop-shadow-xs">
              {badge}
            </span>
          ) : <div />}
          {target !== undefined ? <Countdown target={target} /> : null}
        </div>

        {/* Bottom / Main Content */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pt-4">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-white drop-shadow-sm">
              {title}
            </h2>
            {subtitle ? (
              <p className="text-sm sm:text-base leading-relaxed text-brand-cream/85 max-w-xl font-normal">
                {subtitle}
              </p>
            ) : null}
          </div>

          {/* Action CTAs Matching Coffee Adda Theme */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={href}
              onClick={handlePrimaryClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-gold hover:bg-brand-goldhover text-brand-dark font-extrabold text-xs sm:text-sm shadow-lg hover:shadow-glow-gold hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <span>{ctaLabel}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {secondaryCtaLabel ? (
              <a
                href={secondaryHref}
                onClick={handleSecondaryClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-forest/60 hover:bg-brand-forest text-white font-bold text-xs sm:text-sm border border-emerald-600/40 hover:border-brand-gold/50 backdrop-blur-md shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <span>{secondaryCtaLabel}</span>
              </a>
            ) : null}
          </div>
        </div>

      </div>
    </div>
  );
}

export default AnimatedBanner;
