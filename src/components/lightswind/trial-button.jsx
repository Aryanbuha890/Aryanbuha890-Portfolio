"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * TrialButton
 * A high-end button from Lightswind UI with an animated 360° spinning gradient trail border.
 * Features a frosted glass blur backdrop effect and dynamic shine transitions on hover/focus.
 */
export const TrialButton = React.forwardRef(
  (
    {
      children,
      trailColor = "#ef4444",
      blurColor = "#ff4d6d",
      className = "",
      style = {},
      type = "button",
      href,
      onClick,
      ...props
    },
    ref
  ) => {
    const Component = href ? "a" : "button";
    const componentProps = href
      ? { href, onClick, ...props }
      : { type, onClick, ...props };

    return (
      <>
        <style>
          {`
          @property --gradient-angle {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
          }
          @property --gradient-angle-offset {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
          }
          @property --gradient-percent {
            syntax: "<percentage>";
            initial-value: 5%;
            inherits: false;
          }
          @property --gradient-shine {
            syntax: "<color>";
            initial-value: white;
            inherits: false;
          }

          .shiny-custom-styles {
            --animation: gradient-angle linear infinite;
            --duration: 3s;
            --trail-color: var(--user-trail-color, #ef4444);
            --blur-color: var(--user-blur-color, #ff4d6d);
            --btn-surface: rgba(10, 10, 10, 0.75);
            --inset-border: rgba(255, 255, 255, 0.12);

            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);

            border: 1.5px solid transparent;
            background: 
              linear-gradient(var(--btn-surface), var(--btn-surface)) padding-box,
              conic-gradient(
                from calc(var(--gradient-angle) - var(--gradient-angle-offset)),
                transparent,
                var(--trail-color) var(--gradient-percent),
                var(--gradient-shine) calc(var(--gradient-percent) * 2),
                var(--trail-color) calc(var(--gradient-percent) * 3),
                transparent calc(var(--gradient-percent) * 4)
              ) border-box;
            box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.15), inset 0 0 0 1px var(--inset-border), 0 0 15px rgba(239, 68, 68, 0.15);

            transition: --gradient-angle-offset 800ms cubic-bezier(0.25, 1, 0.5, 1),
                        --gradient-percent 800ms cubic-bezier(0.25, 1, 0.5, 1),
                        --gradient-shine 800ms cubic-bezier(0.25, 1, 0.5, 1),
                        box-shadow 300ms ease,
                        transform 200ms ease;
            animation: var(--animation) var(--duration);
            animation-composition: add;
          }

          :is(.dark .shiny-custom-styles, [data-theme="dark"] .shiny-custom-styles) {
            --btn-surface: rgba(8, 8, 8, 0.8);
            --inset-border: rgba(255, 255, 255, 0.12);
          }

          .shiny-custom-styles:is(:hover, :focus-visible) {
            --gradient-percent: 22%;
            --gradient-angle-offset: 95deg;
            --gradient-shine: var(--blur-color);
            animation-play-state: running;
            box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.25), inset 0 0 0 1px var(--inset-border), 0 0 25px rgba(239, 68, 68, 0.35);
          }

          @keyframes gradient-angle {
            to {
              --gradient-angle: 360deg;
            }
          }
        `}
        </style>

        <Component
          ref={ref}
          className={cn(
            "backdrop-blur-xl font-bold shiny-custom-styles isolate relative cursor-pointer outline-offset-4 py-3 px-6 text-sm leading-tight rounded-full text-white active:translate-y-px inline-flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-[0.98]",
            className
          )}
          style={{
            "--user-trail-color": trailColor,
            "--user-blur-color": blurColor,
            ...style,
          }}
          {...componentProps}
        >
          <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap font-semibold tracking-wide text-neutral-200 hover:text-white">
            {children}
          </span>
        </Component>
      </>
    );
  }
);

TrialButton.displayName = "TrialButton";
export default TrialButton;
