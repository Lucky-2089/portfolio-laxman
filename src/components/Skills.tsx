import React from 'react';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@blinkdotnew/ui';
import { ShieldCheck, Database, Layout, Terminal, Bot, Workflow } from 'lucide-react';

const data = [
  { subject: 'Automation', A: 95, fullMark: 100 },
  { subject: 'AI/ML Testing', A: 85, fullMark: 100 },
  { subject: 'API/DB', A: 90, fullMark: 100 },
  { subject: 'Agile', A: 95, fullMark: 100 },
  { subject: 'DevOps', A: 80, fullMark: 100 },
  { subject: 'Mortgage Domain', A: 85, fullMark: 100 },
];

const skillsList = [
  { icon: Terminal, name: 'Automation', description: 'Selenium WebDriver, Cucumber, TestNG' },
  { icon: Bot, name: 'AI/ML Testing', description: 'Generative AI-driven testing approaches' },
  { icon: Database, name: 'Data & API', description: 'Postman, JMeter, SQL, MongoDB' },
  { icon: Workflow, name: 'DevOps & CI/CD', description: 'Jenkins, GitHub Actions, Docker' },
  { icon: ShieldCheck, name: 'Quality Assurance', description: 'Manual, Regression, UAT' },
  { icon: Layout, name: 'Tech Stack', description: 'Core Java, JavaScript, Python' },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground leading-none uppercase">
            TECHNICAL <span className="text-gradient">MASTERY</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of tools and methodologies leveraged over 10+ years.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid sm:grid-cols-2 gap-6">
            {skillsList.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card h-full border-white/5 group hover:border-primary/50 transition-all duration-500">
                  <CardHeader className="p-6 pb-2">
                    <div className="p-3 glass-card rounded-2xl w-fit group-hover:bg-primary/20 transition-all duration-500">
                      <skill.icon className="text-primary h-6 w-6" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <CardTitle className="text-lg font-bold text-foreground mb-2">{skill.name}</CardTitle>
                    <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="h-[500px] bg-[#0f172a] border border-white/10 rounded-3xl p-8 relative shadow-2xl overflow-hidden">
  {/* 1. Header: Pure White and Bold */}
  <div className="absolute top-6 left-6 text-xl font-black text-white uppercase tracking-widest z-10">
    Proficiency <span className="text-primary">Matrix</span>
  </div>

  <ResponsiveContainer width="100%" height="100%">
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
      {/* 2. Grid: Increased opacity for structure */}
      <PolarGrid stroke="#ffffff30" />

      {/* 3. Labels: Pure White (#ffffff) to beat the grey background */}
      <PolarAngleAxis
        dataKey="subject"
        tick={{ fill: '#ffffff', fontSize: 14, fontWeight: 800 }}
      />

      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />

      {/* 4. Radar: Stronger blue fill to stand out */}
      <Radar
        name="Proficiency"
        dataKey="A"
        stroke="#3b82f6"
        strokeWidth={3}
        fill="#3b82f6"
        fillOpacity={0.7}
      />
    </RadarChart>
  </ResponsiveContainer>
</div>
        </div>
      </div>
    </section>
  );
};
