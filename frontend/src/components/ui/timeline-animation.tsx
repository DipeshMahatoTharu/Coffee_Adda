"use client";

import React, { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

export interface TimelineContentProps<T extends keyof JSX.IntrinsicElements = "div"> {
  as?: T;
  animationNum?: number;
  timelineRef?: React.RefObject<HTMLElement>;
  customVariants?: Variants;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export function TimelineContent<T extends keyof JSX.IntrinsicElements = "div">({
  as = "div" as T,
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  children,
  ...props
}: TimelineContentProps<T>) {
  const localRef = useRef<HTMLElement>(null);
  const targetRef = timelineRef || localRef;
  const isInView = useInView(targetRef, { once: true, margin: "-40px" });

  const MotionComponent = (motion as any)[as] || motion.div;

  return (
    <MotionComponent
      ref={localRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      variants={customVariants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

export default TimelineContent;
