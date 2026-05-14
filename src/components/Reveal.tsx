import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "rise" | "fade" | "scale" | "rule";

const variantsMap: Record<Variant, Variants> = {
  rise: {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  },
  fade: {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.97 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  },
  rule: {
    hidden: { scaleX: 0 },
    show: { scaleX: 1, transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] } },
  },
};

interface RevealProps {
  children?: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "h1" | "h2" | "h3" | "p" | "span" | "li";
  amount?: number;
}

export function Reveal({
  children,
  variant = "rise",
  delay = 0,
  className,
  as = "div",
  amount = 0.3,
}: RevealProps) {
  const reduce = useReducedMotion();
  const Component = motion[as];
  const v = variantsMap[variant];
  return (
    <Component
      className={className}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={v}
      transition={{ delay }}
      style={variant === "rule" ? { transformOrigin: "left center" } : undefined}
    >
      {children}
    </Component>
  );
}
