import { motion } from "motion/react";
import { GlassCard } from "./GlassCard";
import { Youtube } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative bg-[#12151B] py-32">
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
            <span className="text-sm text-[#8E8E93]">Who I Am</span>
          </motion.div>
          <h2 className="mb-4 text-5xl tracking-tight text-white">About Me</h2>
          <p className="mx-auto max-w-2xl text-lg text-[#8E8E93]">
            I invoke emotions through storytelling and editing.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {/* Centered Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-3xl"
          >
            <GlassCard className="p-8" hover={false}>
              <h3 className="mb-6 text-3xl text-white">
                Visual Storyteller & Creative Person
              </h3>
              
              <div className="space-y-4 text-[15px] leading-relaxed text-[#D1D1D6]">
                <p>
                  Tôi là Nguyễn Trọng Việt — video editor, motion designer và filmmaker đam mê kể chuyện bằng hình ảnh. Tôi thích những dự án kết hợp hình ảnh mạnh với cảm xúc, nhịp điệu và storytelling.

                  Hành trình của tôi bắt đầu từ những edit đơn giản, và dần phát triển kỹ năng về cinematic editing, typography-based videos, documentary-style storytelling và color grading.

                  Tôi tin rằng editing tốt không chỉ là cắt ghép và hiệu ứng — mà là timing, mood và sự chân thật.
                </p>
                
                <p>
                  I believe that Every frame is carefully crafted to tell a story that resonates 
                  with clarity and impact.
                </p>
                
                <p>
                  From commercial brand films to personal documentaries, I bring a cinematic 
                  eye and meticulous attention to detail to every project. My goal is to create 
                  visuals that don't just look beautiful, but feel meaningful.
                </p>
              </div>

              {/* Signature tools */}
              <div className="mt-8 border-t border-white/[0.12] pt-6">
                <div className="text-sm text-[#8E8E93] mb-3">Primary Tools</div>
                <div className="flex flex-wrap gap-2">
                  {["Adobe Premiere Pro", "DaVinci Resolve", "After Effects", "Adobe Photoshop"].map((tool, index) => (
                    <span
                      key={index}
                      className="rounded-lg border border-white/[0.12] bg-white/[0.04] px-3 py-1 text-sm text-white"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* YouTube Channel Link */}
              <div className="mt-8 border-t border-white/[0.12] pt-6">
                <motion.a
                  href="https://www.youtube.com/@pradeepmov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 rounded-xl border border-white/[0.12] bg-white/[0.04] p-4 transition-all duration-300 hover:border-[#FF453A]/50 hover:bg-[#FF453A]/10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Youtube className="h-6 w-6 text-[#FF453A]" />
                  <span className="text-white group-hover:text-[#FF453A] transition-colors">
                    Visit My YouTube Channel
                  </span>
                </motion.a>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}