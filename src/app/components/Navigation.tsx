import { motion } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Skills", href: "#skills" },
  { name: "YouTube", href: "#youtube" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [activeItem, setActiveItem] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.12] bg-[#0B0D10]/80 backdrop-blur-[40px]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          className="text-xl tracking-tight text-white"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <span className="font-semibold">Nguyễn Trọng Việt</span>
        </motion.div>

        {/* Desktop Nav Items */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="relative text-[15px] text-[#D1D1D6] transition-colors duration-300 hover:text-white"
              onHoverStart={() => setActiveItem(item.name)}
              onHoverEnd={() => setActiveItem("")}
              onClick={() => setActiveItem(item.name)}
            >
              {item.name}
              {activeItem === item.name && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#0A84FF]"
                  layoutId="activeNav"
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Desktop Hire Me Button */}
        <motion.a
          href="#contact"
          className="hidden md:block rounded-full border border-white/[0.12] bg-white/[0.06] px-6 py-2 text-[15px] text-white backdrop-blur-[20px] transition-all duration-300 hover:border-[#0A84FF]/50 hover:bg-[#0A84FF]/10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hire Me
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden border-t border-white/[0.12] bg-[#0B0D10]/95 backdrop-blur-[40px]"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-[15px] text-[#D1D1D6] hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full rounded-full border border-white/[0.12] bg-white/[0.06] px-6 py-2 text-center text-[15px] text-white backdrop-blur-[20px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}