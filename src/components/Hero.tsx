import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Download, Linkedin, Github } from 'lucide-react';
import { Button, Badge } from '@blinkdotnew/ui';

// Centralized links for consistency
const SOCIAL_LINKS = {
  github: "https://github.com/Lucky-2089",
  linkedin: "https://www.linkedin.com/in/laxman-telang-a5068715a/",
  resume: "/resume.pdf" // Ensure your file is in the 'public' folder named exactly resume.pdf
};

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <div className="flex justify-center">
          <Badge
            variant="outline"
            className="px-4 py-2 text-sm font-medium tracking-wide text-primary glass-card animate-pulse"
          >
            AVAILABLE FOR NEW OPPORTUNITIES
          </Badge>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground leading-none">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="block"
          >
            LAXMAN
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gradient block"
          >
            TELANG
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-2xl font-medium text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Senior Quality Engineer & <span className="text-primary">AI/ML Driven</span> Testing Specialist.
          Bridging the gap between code and quality in the Banking sector.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-6 pt-8"
        >
          {/* Link to Projects */}
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button size="lg" className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>

          {/* Download Resume Button */}
          <a
            href={SOCIAL_LINKS.resume}
            download="Laxman_Telang_Resume.pdf"
            className="inline-block"
          >
            <Button variant="outline" size="lg" className="rounded-full glass-card">
              Download Resume <Download className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex justify-center items-center gap-8 pt-12"
        >
          {[
            { Icon: Linkedin, href: SOCIAL_LINKS.linkedin },
            { Icon: Github, href: SOCIAL_LINKS.github },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-3 glass-card rounded-full text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer"
            >
              <Icon size={24} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Hero Animation Elements */}
      <motion.div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-primary/20 rounded-full blur-[100px] -z-10"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10"
        animate={{
          x: [0, -40, 0],
          y: [0, 60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
};