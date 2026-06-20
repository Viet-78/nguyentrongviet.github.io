import { motion } from "motion/react";
import { GlassCard } from "./GlassCard";
import { Film, Palette, Camera, Wand2, Volume2, BookOpen } from "lucide-react";

const skills = [
  {
    icon: Film,
    title: "Video Editing",
    description: "Precision cuts and seamless transitions",
  },
  {
    icon: Wand2,
    title: "Motion Design",
    description: "Fluid animations and dynamic graphics",
  },
  {
    icon: Palette,
    title: "Color Grading",
    description: "Cinematic looks and mood enhancement",
  },
  {
    icon: Camera,
    title: "Cinematography",
    description: "Visual composition and lighting",
  },
  {
    icon: Volume2,
    title: "Sound Design",
    description: "Immersive audio experiences",
  },
  {
    icon: BookOpen,
    title: "Storytelling",
    description: "Narrative structure and emotion",
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative bg-[#12151B] py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-4 inline-block rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2 backdrop-blur-[20px]"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm text-[#8E8E93]">What I Do</span>
          </motion.div>
          <h2 className="mb-4 text-5xl tracking-tight text-white">
            Skills & Expertise
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#8E8E93]">
            Comprehensive creative capabilities for modern visual storytelling
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <GlassCard key={index} className="group p-8">
              <motion.div
                className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0A84FF]/20 to-[#0A84FF]/5"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{ duration: 0.3 }}
              >
                <skill.icon className="h-8 w-8 text-[#0A84FF]" />
              </motion.div>

              <h3 className="mb-3 text-2xl text-white">
                {skill.title}
              </h3>
              
              <p className="text-[15px] leading-relaxed text-[#8E8E93]">
                {skill.description}
              </p>

              {/* Subtle glow effect on hover */}
              <motion.div
                className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#0A84FF]/0 to-[#0A84FF]/0 opacity-0 transition-opacity duration-500 group-hover:from-[#0A84FF]/10 group-hover:to-transparent group-hover:opacity-100"
                style={{ pointerEvents: "none" }}
              />
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
