import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@blinkdotnew/ui';
import { Github, ExternalLink, ShieldAlert, BrainCircuit, Workflow, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Tokenization DApp',
    description: 'A sophisticated decentralized application for asset tokenization, built on blockchain technology (Ethereum/Hedera). Focusing on secure, transparent transactions in the fintech domain.',
    icon: Globe,
    tags: ['Web3', 'Blockchain', 'Solidity', 'React'],
    github: '#',
    demo: '#'
  },
  {
    title: 'AI Smart Contract Validator',
    description: 'An AI-powered tool for automated validation and auditing of smart contracts. Leverages large language models (Gemini/LangChain) to identify security vulnerabilities and logic errors.',
    icon: BrainCircuit,
    tags: ['AI/ML', 'LangChain', 'Security', 'Automation'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Test Automation Frameworks',
    description: 'Enterprise-grade automation frameworks for Lloyds Bank use case. Built with Playwright and Selenium, integrating AI-driven testing approaches to reduce maintenance and improve reliability.',
    icon: Workflow,
    tags: ['Playwright', 'Selenium', 'Java', 'AI-Driven'],
    github: '#',
    demo: '#'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground leading-none uppercase">
            SIGNATURE <span className="text-gradient">PROJECTS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovation, security, and quality in the fintech and blockchain space.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="glass-card h-full flex flex-col border-white/5 hover:border-primary/50 transition-all duration-500 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500">
                  <project.icon size={80} />
                </div>

                <CardHeader className="p-8 pb-4">
                  <div className="p-4 glass-card rounded-2xl w-fit group-hover:bg-primary/20 transition-all duration-500 mb-6">
                    <project.icon className="text-primary h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl font-black tracking-tighter text-foreground mb-4">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="p-8 pt-0 flex-1 flex flex-col gap-6">
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-white/5 text-muted-foreground rounded-full border border-white/10 group-hover:border-primary/20 group-hover:text-primary transition-all duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-6 border-t border-white/5">
                    <a href={project.github} className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
                      <Github size={16} /> Codebase
                    </a>
                    <a href={project.demo} className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
