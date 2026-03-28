import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@blinkdotnew/ui';
import { Github, ExternalLink, ShieldAlert, BrainCircuit, Workflow, Globe } from 'lucide-react';

const projects = [
  {
    title: 'AI Smart Trading',
    description: 'A high-fidelity Proof of Concept (POC) designed for institutional users within the ** Technology Center** ecosystem. It provides a secure gateway for managing digital assets, funding wallets, and performing asset swaps via the Third Party Exchange and ** Blockchain**..',
    icon: Globe,
    tags: ['Gemini AI ', 'Blockchain', 'Python Modular Architecture', 'Streamlit '],
    github: 'https://github.com/Lucky-2089/DAP_Trading_AI.git',
    demo: '#'
  },
{
    title: 'Causal Impact Analyzer',
    description: 'An AI-powered Causal Inference Analytics Dashboard built with Streamlit to estimate and visualize the impact of interventions using advanced causal machine learning models.',
    icon: Workflow,
    tags: ['Python', 'Panda', 'Numpy', 'EconML','Streamlit'],
    github: 'https://github.com/Lucky-2089/causal-impact-analyzer.git',
    demo: '#'
  },
{
    title: 'Disaster Relief Volunteer Portal',
    description: 'The Disaster Relief Volunteer Portal is a full-stack web application that enables users to submit help requests and volunteers to register and assist. The application supports offline-first functionality and can synchronize queued requests when back online. It is also responsive and PWA-ready for mobile usage.',
    icon: BrainCircuit,
    tags: ['React 18', 'PWA-ready', 'Node.js', 'SQLite '],
    github: 'https://github.com/Lucky-2089/disaster-relief-app.git',
    demo: '#'
  },
  {
    title: 'Blockchain Smart Contract Validator',
    description: 'An AI-powered tool for automated validation and auditing of smart contracts. Leverages large language models (Gemini/LangChain) to identify security vulnerabilities and logic errors.',
    icon: BrainCircuit,
    tags: ['AI/ML', 'LangChain', 'Security', 'Automation'],
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
