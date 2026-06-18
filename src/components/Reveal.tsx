import { motion, type TargetAndTransition } from "motion/react";

type Variant = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scaleIn" | "zoomIn" | "flipUp";

interface RevealProps {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  margin?: string;
}

const variants: Record<Variant, { initial: TargetAndTransition; whileInView: TargetAndTransition }> = {
  fadeUp: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
  },
  fadeDown: {
    initial: { opacity: 0, y: -30 },
    whileInView: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
  },
  fadeRight: {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
  },
  zoomIn: {
    initial: { opacity: 0, scale: 0.85 },
    whileInView: { opacity: 1, scale: 1 },
  },
  flipUp: {
    initial: { opacity: 0, y: 30, rotateX: 15 },
    whileInView: { opacity: 1, y: 0, rotateX: 0 },
  },
};

export default function Reveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.5,
  className,
  once = true,
  margin = "-80px",
}: RevealProps) {
  const v = variants[variant];
  return (
    <motion.div
      className={className}
      initial={v.initial}
      whileInView={v.whileInView}
      viewport={{ once, margin }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
