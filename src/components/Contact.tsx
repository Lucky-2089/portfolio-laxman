import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Bot, DollarSign, Loader2 } from 'lucide-react';
import { Button, Input, Textarea, Card, CardHeader, CardTitle, CardContent, Badge } from '@blinkdotnew/ui';
// 1. Import the library
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I am Laxman\'s AI assistant. How can I help you today?' },
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // 2. Add state for the contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  // 3. Handle Email Submission
  const handleDirectMessage = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace these strings with your actual EmailJS Service ID, Template ID, and Public Key
    const serviceId = 'service_f5gni4q';
    const templateId = 'template_1prv8o7';
    const publicKey = 'VZic0CSXN6Kc5CMGH';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Laxman Telang',
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send message. Please try again later.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    setMessages(prev => [...prev, { role: 'user', text: userInput }]);
    setUserInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: 'Thank you for your interest! Laxman is specialized in AI testing and automation. Would you like to see his projects or schedule a call?' }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground leading-none uppercase">
            GET IN <span className="text-gradient">TOUCH</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on the next big thing in fintech and quality engineering?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Mail, label: 'Email', value: 'laxman2089@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+91 8055964051' },
                { icon: MapPin, label: 'Location', value: 'Maharashtra, India' },
                { icon: MessageSquare, label: 'Chat', value: 'AI Assistant' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2 p-6 glass-card rounded-2xl border-white/5"
                >
                  <div className="p-3 glass-card rounded-xl w-fit">
                    <item.icon className="text-primary h-5 w-5" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{item.label}</div>
                  <div className="text-sm font-bold text-foreground">{item.value}</div>
                </motion.div>
              ))}
            </div>

            <div className="p-8 glass-card border-white/5 space-y-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 -z-10 group-hover:bg-primary/10 transition-all duration-500" />
              <div className="flex items-center gap-4">
                <div className="p-4 glass-card rounded-2xl">
                  <Bot className="text-primary h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-tighter text-foreground uppercase">Support My Work</h3>
                  <Badge className="bg-primary/20 text-primary border-primary/20">Monetized</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If you find my QA insights or <span className="text-foreground font-semibold">AI Testing Frameworks</span> helpful, consider supporting the project.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="w-full rounded-full border-primary/50 text-primary hover:bg-primary/10"
                onClick={() => window.open('https://buymeachai.ezee.li/ltelang2089', '_blank')}
              >
                Click to Support & Get in Touch
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card border-white/5 overflow-hidden">
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-2xl font-black tracking-tighter text-foreground uppercase">Direct Message</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 space-y-6">
                <form onSubmit={handleDirectMessage} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Name</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                        className="glass-card border-white/5 focus:border-primary/50 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@company.com"
                        className="glass-card border-white/5 focus:border-primary/50 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
                    <Input
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="Project Inquiry"
                      className="glass-card border-white/5 focus:border-primary/50 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell me about your vision..."
                      className="min-h-[150px] glass-card border-white/5 focus:border-primary/50 transition-all duration-300"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSending}
                    className="w-full rounded-full group"
                  >
                    {isSending ? (
                      <>Sending... <Loader2 className="ml-2 h-4 w-4 animate-spin" /></>
                    ) : (
                      <>Send Message <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* AI Chat Window Overlay */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-8 right-8 w-full max-w-[400px] z-50 p-4"
          >
            <Card className="glass shadow-2xl border-white/10 overflow-hidden rounded-3xl h-[600px] flex flex-col">
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-primary/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 glass-card rounded-xl">
                    <Bot className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-foreground uppercase tracking-tighter">AI Assistant</div>
                    <div className="text-[10px] text-primary font-bold uppercase tracking-widest">Always Active</div>
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <MessageSquare size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-primary/20">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 rounded-3xl text-sm ${
                      msg.role === 'user'
                      ? 'bg-primary text-primary-foreground rounded-tr-none'
                      : 'glass-card border-white/10 rounded-tl-none text-foreground/90'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="glass-card border-white/10 rounded-3xl rounded-tl-none p-4 flex gap-1">
                      <div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 border-t border-white/10 bg-background/80">
                <div className="flex gap-2">
                  <Input
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your question..."
                    className="glass-card border-white/5 rounded-full"
                  />
                  <Button onClick={handleSendMessage} size="icon" className="rounded-full flex-shrink-0">
                    <Send size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};