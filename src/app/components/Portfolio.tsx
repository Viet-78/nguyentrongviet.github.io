import { motion } from "motion/react";
import { GlassCard } from "./GlassCard";
import { Play } from "lucide-react";
import React from "react";

const projects = [
  {
    title: "Cinematic short",
    category: "Travel short",
    videoUrl: "https://www.instagram.com/reel/DTFABc8Efv5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // Instagram Reel
    image: "https://images.unsplash.com/photo-1758592670606-096a0fc94aed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNpbmVtYXxlbnwxfHx8fDE3Njg5NDc4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Typography edit",
    category: "Typography",
    videoUrl: "https://www.instagram.com/reel/DTk20gdDbBO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // YouTube video
    image: "https://images.unsplash.com/photo-1740139282794-1155aee6f7ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBkZXNpZ24lMjBhYnN0cmFjdHxlbnwxfHx8fDE3Njg5OTI0Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Talking head",
    category: "Overall",
    videoUrl: "https://www.instagram.com/reel/DSJ0liOiVLj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // YouTube Shorts (example)
    image: "https://images.unsplash.com/photo-1671902715190-b3f42d5228e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvciUyMGdyYWRpbmclMjBjaW5lbWF0aWN8ZW58MXx8fHwxNzY4OTkyNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Documentary Edit",
    category: "Film",
    videoUrl: "https://www.instagram.com/reel/DRL71Gziewq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // YouTube video
    image: "https://images.unsplash.com/photo-1695408248582-0c122bf0f9e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNhbWVyYSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njg5NjQ1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Insta edits",
    category: "Variation",
    videoUrl: "https://www.instagram.com/reel/DSo3Irmic8u/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // Instagram Reel (example)
    image: "https://images.unsplash.com/photo-1758553026412-bc1da0ebd366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjB2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY4OTkyNDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Effects edit",
    category: "After effects ",
    videoUrl: "https://www.instagram.com/reel/DTVA2XME7jo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", // YouTube video
    image: "https://images.unsplash.com/photo-1758592670606-096a0fc94aed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNpbmVtYXxlbnwxfHx8fDE3Njg5NDc4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

// Helper function to convert various video URLs to embeddable format
function getEmbedUrl(url: string): string {
  // Instagram Reel
  if (url.includes('instagram.com/reel/')) {
    const reelId = url.match(/reel\/([A-Za-z0-9_-]+)/)?.[1];
    if (reelId) {
      return `https://www.instagram.com/reel/${reelId}/embed/`;
    }
  }
  
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

export function Portfolio() {
  const [selectedVideo, setSelectedVideo] = React.useState<string | null>(null);

  return (
    <section id="portfolio" className="relative bg-[#0B0D10] py-32">
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
            <span className="text-sm text-[#8E8E93]">My Work</span>
          </motion.div>
          <h2 className="mb-4 text-5xl tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#8E8E93]">
            A collection of cinematic stories, crafted with precision and passion
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <GlassCard key={index} className="group cursor-pointer overflow-hidden p-0">
              <div className="relative aspect-[16/10] overflow-hidden">
                {selectedVideo === project.videoUrl ? (
                  <iframe
                    src={getEmbedUrl(project.videoUrl)}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500"
                      whileHover={{ scale: 1.1 }}
                    />
                    
                    {/* Overlay on hover */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
                    >
                      <motion.button
                        onClick={() => setSelectedVideo(project.videoUrl)}
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0A84FF]"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="h-6 w-6 fill-white text-white" />
                      </motion.button>
                    </motion.div>
                  </>
                )}
              </div>

              <div className="p-6">
                <div className="mb-2 text-xs uppercase tracking-wider text-[#8E8E93]">
                  {project.category}
                </div>
                <h3 className="text-xl text-white group-hover:text-[#0A84FF] transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Animated underline */}
                <motion.div
                  className="mt-2 h-[2px] bg-[#0A84FF]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}