import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B0D10] pt-24">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-[#0A84FF]/10 blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#FF453A]/5 blur-[100px]"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2">
        {/* Left Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-4"
          >
            <motion.div
              className="inline-block rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2 backdrop-blur-[20px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-sm text-[#8E8E93]">Available for hire</span>
            </motion.div>

            <h1 className="text-6xl tracking-tight text-white lg:text-7xl">
              <span className="block font-semibold">Nguyễn Trọng Việt</span>
            </h1>

            <div className="flex flex-wrap items-center gap-2 text-xl text-[#D1D1D6]">
              <span>Video Editor</span>
              <span className="text-[#8E8E93]">•</span>
              <span>Filmmaker</span>
              <span className="text-[#8E8E93]">•</span>
              <span>Motion Designer</span>
              <span className="text-[#8E8E93]">•</span>
              <span>Storyteller</span>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-[#8E8E93]">
              Designing motion with clarity and emotion. Visual storytelling through precision and rhythm.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.a
              href="#portfolio"
              className="group relative overflow-hidden rounded-full bg-[#0A84FF] px-8 py-4 text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Portfolio
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#contact"
              className="rounded-full border border-white/[0.12] bg-white/[0.06] px-8 py-4 text-white backdrop-blur-[20px] transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>

        {/* Right Content - Abstract Glass Shape */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative aspect-square overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1757746928843-680d486ecf15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmaWxtbWFrZXIlMjBwb3J0cmFpdCUyMGRhcmt8ZW58MXx8fHwxNzY4OTkyNDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional Portrait"
              className="h-full w-full object-cover"
            />
            {/* Glass overlay */}
            <div className="absolute inset-0 border border-white/[0.12] bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-[2px]" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-12 w-6 rounded-full border border-white/[0.12] p-1">
          <motion.div
            className="h-2 w-2 rounded-full bg-[#0A84FF]"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}