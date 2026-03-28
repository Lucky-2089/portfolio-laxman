import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Background3D } from './components/Background3D';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { AIBugPredictor } from './components/AIBugPredictor'; // Ensure you created this file!

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      <Background3D />
      <Navbar />

      <main className="container mx-auto px-4 space-y-32 pb-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />

        {/* --- NEW: Vertex AI Showcase Section --- */}
        <section id="ai-lab" className="py-10">
           <AIBugPredictor />
        </section>

        <Contact />
      </main>

      {/* --- NEW: Professional Footer with GCP Monitoring --- */}
      <footer className="border-t border-white/10 py-10 bg-black/20 backdrop-blur-md">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-muted-foreground text-sm font-medium">
            © 2026 Laxman Telang • Senior Quality Engineer
          </div>

          {/* GCP Monitoring Badge */}
          <div className="flex items-center gap-3 px-4 py-2 bg-[#0f172a] border border-green-500/30 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.1)]">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">
              GCP Status: Operational
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}