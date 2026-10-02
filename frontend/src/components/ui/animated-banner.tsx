"use client";

import React, { useEffect, useState } from "react";
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
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  posterSrc?: string;
  /** Countdown target. Renders a DD:HH:MM:SS timer that ticks down to it. */
  deadline?: Date | number | string;
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
          <span className="rounded-lg bg-black/45 border border-white/20 px-2 py-1 backdrop-blur-md shadow-xs">
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
  imageSrc = "/coffee-banner.jpg",
  imageAlt = "Artisanal freshly brewed coffee at Coffee Adda",
  videoSrc,
  posterSrc,
  deadline,
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

  const effectiveImage = imageSrc || posterSrc || "/coffee-banner.jpg";

  return (
    <div
      className={cn(
        "group relative block w-full overflow-hidden rounded-3xl border border-brand-gold/30 bg-brand-forest shadow-2xl transition-all duration-300",
        className,
      )}
    >
      {/* Background Coffee Visual */}
      <img
        src={effectiveImage}
        alt={imageAlt || title}
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover object-right md:object-center transition-transform duration-700 ease-out group-hover:scale-105"
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

      {/* Gradient Overlay: Deep rich brand-dark on the text side, gently translucent over the coffee image on the right */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 sm:via-brand-forest/80 to-transparent pointer-events-none"
      />

      {/* Subtle bottom vignette to ensure contrast for buttons */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-black/20 pointer-events-none"
      />

      {/* Interactive hover depth glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-brand-forest/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
      />

      {/* Content Layer */}
      <div className="relative z-10 flex min-h-[300px] sm:min-h-[340px] lg:min-h-[360px] flex-col justify-between p-6 sm:p-10 lg:p-12 text-white">
        
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
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pt-6">
          <div className="max-w-2xl space-y-3">
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-white drop-shadow-sm">
              {title}
            </h2>
            {subtitle ? (
              <p className="text-sm sm:text-base leading-relaxed text-brand-cream/90 max-w-xl font-normal drop-shadow-xs">
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-forest/70 hover:bg-brand-forest text-white font-bold text-xs sm:text-sm border border-brand-gold/40 hover:border-brand-gold backdrop-blur-md shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
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
