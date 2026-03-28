import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@blinkdotnew/ui';
import { Quote } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8 relative">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground leading-none">
              WHO IS <span className="text-gradient">LAXMAN</span><span className="text-foreground">?</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                With over a decade of experience in the IT industry, I specialize in quality assurance and software testing, with a unique focus on the <span className="text-foreground font-semibold">US Mortgage and Insurance</span> sectors.
              </p>
              <p>
                My career spans a comprehensive range of testing methodologies, from manual and automated testing to <span className="text-primary font-semibold">Generative AI-driven</span> approaches, positioning me at the forefront of modern software quality practices.
              </p>
              <p>
                My expertise includes end-to-end testing processes—ranging from test planning, design, execution, and analysis, to efficient defect management and in-depth API and database testing. I bring extensive hands-on experience in leveraging tools like <span className="text-foreground font-semibold">Selenium WebDriver, Cucumber, TestNG, Postman, and JMeter</span>.
              </p>
            </div>

            <div className="flex gap-12 pt-8">
              {[
                { label: 'Experience', value: '10+' },
                { label: 'Projects', value: '50+' },
                { label: 'Banking', value: 'QA' },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-3xl font-black text-primary tracking-tighter">{stat.value}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10 group-hover:bg-primary/30 transition-all duration-500" />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card border-white/5 overflow-hidden group-hover:border-white/20 transition-all duration-500">
                <CardContent className="p-12 space-y-8">
                  <Quote className="text-primary h-12 w-12 opacity-50" />
                  <p className="text-2xl font-medium leading-relaxed italic text-foreground/90">
                    "What sets me apart is my commitment to innovation in testing through Generative AI tools, which I’ve integrated into workflows to drive coverage and accuracy."
                  </p>
                  <div className="pt-4 border-t border-white/5">
                    <div className="text-lg font-bold text-foreground">Laxman Telang</div>
                    <div className="text-sm text-muted-foreground font-medium">Senior Quality Engineer</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
