import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 hidden lg:block"
      animate={{
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="absolute h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0A84FF]/5 blur-[100px]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />
    </motion.div>
  );
}
