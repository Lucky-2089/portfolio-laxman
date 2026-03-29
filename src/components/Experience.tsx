import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@blinkdotnew/ui';
import { Briefcase, Calendar, MapPin, Building2, ChevronRight } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Quality Engineer',
    company: 'Lloyds Technology Centre India',
    period: 'March 2025 - Present',
    location: 'Hyderabad, Telangana, India',
    description: 'Specializing in Automation & AI-Driven Testing for the Banking sector. Leading QA initiatives in FinTech and Digital Banking environments.',
    tags: ['FinTech', 'Blockchain', 'Banking', 'AI Testing']
  },
  {
    role: 'Sr. Quality Assurance Engineer',
    company: 'Livegage',
    period: 'August 2022 - July 2024',
    location: 'Mumbai, Maharashtra, India',
    description: 'Expert in US Mortgage & Insurance domain. Led end-to-end testing processes, test planning, and API/database testing.',
    tags: ['Mortgage', 'Insurance', 'Selenium', 'Java']
  },
  {
    role: 'Software Engineer',
    company: 'GREENITY SOFTWARE SOLUTIONS PRIVATE LIMITED',
    period: 'January 2014 - August 2022',
    location: 'Navi Mumbai, Maharashtra, India',
    description: '8 years 8 months of comprehensive experience in software testing methodologies, manual, and automated testing.',
    tags: ['Software Engineering', 'Testing', 'Automation']
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground leading-none uppercase">
            PROFESSIONAL <span className="text-gradient">ODYSSEY</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey of growth, innovation, and excellence across a decade of testing.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center md:justify-between group ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10 group-hover:scale-150 transition-all duration-300" />

                <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <Card className="glass-card border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                    <CardContent className="p-8 space-y-4">
                      <div className={`flex items-center gap-2 text-primary font-black text-sm uppercase tracking-widest ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                        <Calendar size={14} /> {exp.period}
                      </div>
                      <h3 className="text-2xl font-black tracking-tighter text-foreground leading-tight">{exp.role}</h3>
                      <div className={`flex items-center gap-4 text-sm font-medium text-muted-foreground ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                        <div className="flex items-center gap-1"><Building2 size={14} /> {exp.company}</div>
                        <div className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                      <div className={`flex flex-wrap gap-2 pt-2 ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                        {exp.tags.map((tag, j) => (
                          <span key={j} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
