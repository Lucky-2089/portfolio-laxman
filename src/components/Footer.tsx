import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ChevronUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-24 relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2 space-y-8">
            <div className="text-4xl font-black tracking-tighter text-primary">
              LAXMAN <span className="text-foreground">.</span>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
              A premium personal portfolio for a Senior Quality Engineer focused on <span className="text-foreground font-semibold">AI, Blockchain, and Fintech</span>.
            </p>
            <div className="flex gap-6">
              {[
                { Icon: Linkedin, href: '#' },
                { Icon: Github, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Mail, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="p-3 glass-card rounded-2xl text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-widest text-foreground">Navigation</h4>
            <div className="flex flex-col gap-4">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-widest text-foreground">Legal & Privacy</h4>
            <div className="flex flex-col gap-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            © 2026 Laxman Telang. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-xs font-black uppercase tracking-tighter text-foreground hover:text-primary transition-all duration-300"
            >
              Back to Top
              <div className="p-2 glass-card rounded-lg group-hover:bg-primary/20 transition-all duration-500">
                <ChevronUp size={16} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Ambient Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
    </footer>
  );
};
