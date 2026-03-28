import { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Button } from '@blinkdotnew/ui';
import { motion, AnimatePresence } from 'framer-motion';
import { Bug, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';
import { QALogger } from '../utils/logger'; // Verified import

// Secure API Key from Google AI Studio
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export const AIBugPredictor = () => {
  const [input, setInput] = useState("");
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!input || input.length < 10) return;

    setLoading(true);
    setAnalysis(null);

    // Step 1: Log the start of the QA Triage process
    QALogger.info("AI Bug Triage Started", { inputLength: input.length });

    try {
      // Using gemini-2.5-flash for the best free-tier performance in 2026
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const prompt = `
        You are an expert Senior QA Manager at a top FinTech firm.
        Analyze the following bug report: "${input}".

        Provide a concise response in exactly this format:
        SEVERITY: [Critical/High/Medium/Low]
        IMPACT: [1 sentence on business impact]
        TEST STRATEGY: [1-2 sentences on how to verify the fix]
        AUTOMATION: [Can this be automated? Yes/No, and why]
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setAnalysis(text);

      // Step 2: Log successful completion
      QALogger.info("AI Bug Triage Successful");

    } catch (error: any) {
      // Step 3: Log the error for GCP Monitoring
      QALogger.error("Vertex AI Connection Failed", error);

      setAnalysis("⚠️ Monitoring Alert: Unable to connect to Vertex AI. This incident has been logged for review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto p-8 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/10 rounded-2xl shadow-inner">
          <Bug className="text-primary" size={28} />
        </div>
        <div>
          <h2 className="text-2xl font-black text-white uppercase tracking-tighter">
            AI Bug <span className="text-primary">Predictor</span>
          </h2>
          <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            <Sparkles size={12} className="text-primary animate-pulse" />
            Observability Enabled: GCP Monitoring
          </div>
        </div>
      </div>

      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
        Experience AI-driven defect triage. Paste a bug description below, and
        the Gemini model will perform a professional severity assessment and automation analysis.
      </p>

      <div className="relative group">
        <textarea
          className="w-full bg-black/40 border border-white/5 rounded-2xl p-5 text-white mb-4 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all min-h-[150px] resize-none"
          placeholder="e.g., 'The loan calculation engine returns a 500 error when the interest rate is set to 0.0% on the mortgage portal...'"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="absolute bottom-8 right-4 text-[10px] text-muted-foreground font-mono bg-black/50 px-2 py-1 rounded">
          {input.length} chars
        </div>
      </div>

      <Button
        onClick={handleAnalyze}
        disabled={loading || input.length < 10}
        className="w-full py-7 font-black text-lg rounded-2xl uppercase tracking-widest transition-transform active:scale-95 shadow-lg shadow-primary/10"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Analyzing via Vertex AI...
          </span>
        ) : (
          "Run AI Triage"
        )}
      </Button>

      <AnimatePresence>
        {analysis && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <CheckCircle2 size={48} />
            </div>
            <div className="flex items-center gap-2 mb-4 text-primary font-bold text-sm uppercase tracking-widest">
              <CheckCircle2 size={16} />
              QA Analysis Report
            </div>
            <div className="text-foreground/90 font-mono text-sm leading-relaxed whitespace-pre-wrap">
              {analysis}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};