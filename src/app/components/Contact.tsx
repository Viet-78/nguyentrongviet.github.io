import { motion } from "motion/react";
import { GlassCard } from "./GlassCard";
import { Mail, MessageCircle, Instagram, Twitter, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/prad33ep", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export function Contact() {
  // Gmail link with pre-written subject and body
  const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=your.email@example.com&su=Video%20Editing%20Inquiry&body=Hi%20Vi%E1%BB%87t%2C%0A%0ACan%20you%20edit%20my%20video%3F%0A%0A";
  
  const whatsappLink = "https://wa.me/84901234567?text=Hi%20Vi%E1%BB%87t%2C%20can%20you%20edit%20my%20video%3F";

  return (
    <section id="contact" className="relative bg-[#12151B] py-32">
      <div className="mx-auto max-w-4xl px-6">
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
            <span className="text-sm text-[#8E8E93]">Get in Touch</span>
          </motion.div>
          <h2 className="mb-4 text-5xl tracking-tight text-white">
            Let's Collaborate
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#8E8E93]">
            Let's create something meaningful together
          </p>
        </motion.div>

        {/* Contact Card */}
        <GlassCard className="p-12" hover={false}>
          <div className="space-y-8">
            {/* Email and Phone */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <motion.a
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/[0.12] bg-white/[0.04] p-6 transition-all duration-300 hover:border-[#0A84FF]/50 hover:bg-[#0A84FF]/5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0A84FF]/20 to-[#0A84FF]/5">
                  <Mail className="h-6 w-6 text-[#0A84FF]" />
                </div>
                <div>
                  <div className="text-sm text-[#8E8E93]">Email</div>
                  <div className="text-white group-hover:text-[#0A84FF] transition-colors">
                    Send Email
                  </div>
                </div>
              </motion.a>

              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/[0.12] bg-white/[0.04] p-6 transition-all duration-300 hover:border-[#0A84FF]/50 hover:bg-[#0A84FF]/5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0A84FF]/20 to-[#0A84FF]/5">
                  <MessageCircle className="h-6 w-6 text-[#0A84FF]" />
                </div>
                <div>
                  <div className="text-sm text-[#8E8E93]">WhatsApp</div>
                  <div className="text-white group-hover:text-[#0A84FF] transition-colors">
                    Contact Me
                  </div>
                </div>
              </motion.a>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/[0.12]"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-[#12151B] px-4 text-sm text-[#8E8E93]">
                  or connect on social
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 rounded-xl border border-white/[0.12] bg-white/[0.04] p-6 transition-all duration-300 hover:border-[#0A84FF]/50 hover:bg-[#0A84FF]/5"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-6 w-6 text-[#8E8E93] transition-colors group-hover:text-[#0A84FF]" />
                  <span className="text-sm text-[#8E8E93] transition-colors group-hover:text-white">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Availability Badge */}
            <motion.div
              className="flex items-center justify-center gap-2 rounded-full border border-[#0A84FF]/30 bg-[#0A84FF]/5 px-6 py-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="h-2 w-2 rounded-full bg-[#0A84FF]"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm text-white">
                Available for new projects
              </span>
            </motion.div>
          </div>
        </GlassCard>
      </div>

      {/* Footer */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-sm text-[#8E8E93]">
          © 2026 Nguyễn Trọng Việt. Designed with precision and passion.
        </p>
      </motion.div>
    </section>
  );
}