import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={`relative rounded-2xl border border-white/[0.12] bg-white/[0.06] backdrop-blur-[20px] ${className}`}
      style={{
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={hover ? { 
        scale: 1.02,
        boxShadow: '0 12px 48px 0 rgba(10, 132, 255, 0.15)',
        transition: { duration: 0.3 }
      } : {}}
    >
      {/* Glass highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      {children}
    </motion.div>
  );
}
