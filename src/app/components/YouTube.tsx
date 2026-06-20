import { motion } from "motion/react";
import { GlassCard } from "./GlassCard";
import { Youtube } from "lucide-react";
import React from "react";

const videos = [
  {
    title: "Cinematic Color Grading Tutorial",
    videoUrl: "coming soon", // YouTube video
    thumbnail: "https://images.unsplash.com/photo-1671902715190-b3f42d5228e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvciUyMGdyYWRpbmclMjBjaW5lbWF0aWN8ZW58MXx8fHwxNzY4OTkyNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "My Creative Process Behind the Scenes",
    videoUrl: "coming soon", // YouTube Shorts (example)
    thumbnail: "https://images.unsplash.com/photo-1758553026412-bc1da0ebd366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjB2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY4OTkyNDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Edit Like Apple - Premium Techniques",
    videoUrl: "coming soon", // YouTube video
    thumbnail: "https://images.unsplash.com/photo-1758592670606-096a0fc94aed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNpbmVtYXxlbnwxfHx8fDE3Njg5NDc4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

// Helper function to convert various YouTube URLs to embeddable format
function getEmbedUrl(url: string): string {
  // YouTube Shorts
  if (url.includes('youtube.com/shorts/') || url.includes('youtu.be/shorts/')) {
    const videoId = url.match(/shorts\/([A-Za-z0-9_-]+)/)?.[1];
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }
  
  // Regular YouTube (already in embed format or convert)
  if (url.includes('youtube.com/watch')) {
    const videoId = url.match(/[?&]v=([A-Za-z0-9_-]+)/)?.[1];
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }
  
  if (url.includes('youtu.be/')) {
    const videoId = url.match(/youtu\.be\/([A-Za-z0-9_-]+)/)?.[1];
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }
  
  // Return as-is if already in embed format
  return url;
}

export function YouTube() {
  const [selectedVideo, setSelectedVideo] = React.useState<string | null>(null);

  return (
    <section id="youtube" className="relative bg-[#0B0D10] py-32">
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
            <span className="text-sm text-[#8E8E93]">YouTube Channel</span>
          </motion.div>
          <h2 className="mb-4 text-5xl tracking-tight text-white">
            Longform Content
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#8E8E93]">
            Stories that sparks different types of emotions
          </p>
        </motion.div>

        {/* Featured Videos */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {videos.map((video, index) => (
            <GlassCard key={index} className="group cursor-pointer overflow-hidden p-0">
              <div className="relative aspect-video overflow-hidden">
                {selectedVideo === video.videoUrl ? (
                  <iframe
                    src={getEmbedUrl(video.videoUrl)}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <motion.img
                      src={video.thumbnail}
                      alt={video.title}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Play button overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
                    >
                      <motion.button
                        onClick={() => setSelectedVideo(video.videoUrl)}
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF453A]"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Youtube className="h-8 w-8 text-white" />
                      </motion.button>
                    </motion.div>
                  </>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg text-white line-clamp-2 group-hover:text-[#FF453A] transition-colors duration-300">
                  {video.title}
                </h3>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.a
            href="https://youtube.com/@pradeepmov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-8 py-4 text-white backdrop-blur-[20px] transition-all duration-300 hover:border-[#FF453A]/50 hover:bg-[#FF453A]/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Youtube className="h-5 w-5" />
            Visit My Channel
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}