import { motion, useReducedMotion, type Transition } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Variant = "curtain" | "rise" | "clip" | "fade";

interface Props { children: ReactNode; variant?: Variant }

const ease: [number, number, number, number] = [0.76, 0, 0.24, 1];

export function PageTransition({ children, variant = "fade" }: Props) {
  const reduce = useReducedMotion();
  const { location } = useRouterState();
  const key = location.pathname;
  const t: Transition = { duration: reduce ? 0 : 0.7, ease };

  if (variant === "curtain") {
    return (
      <>
        <motion.div
          key={`curtain-${key}`}
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: reduce ? 0 : 0.85, ease }}
          className="fixed inset-0 z-[80] bg-ink pointer-events-none"
          aria-hidden
        />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.4 }}>
          {children}
        </motion.div>
      </>
    );
  }
  if (variant === "rise") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.6, ease }}
      >
        {children}
      </motion.div>
    );
  }
  if (variant === "clip") {
    return (
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={t}
      >
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduce ? 0 : 0.5 }}>
      {children}
    </motion.div>
  );
}
