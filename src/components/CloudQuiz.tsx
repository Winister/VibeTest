import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, CheckCircle2, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useNavigate } from 'react-router-dom';

const QUESTIONS = [
  {
    id: 1,
    text: "What type of custom solution is your business looking to build?",
    options: [
      { id: 'a', text: 'Stunning Modern Website (Promo applicable!)', type: 'web-development' },
      { id: 'b', text: 'Custom iOS, Android or Web App', type: 'app-development' },
      { id: 'c', text: 'Professional IT Strategy & Infrastructure Strategy', type: 'it-consulting' }
    ]
  },
  {
    id: 2,
    text: "What is your chief commercial objective for this setup?",
    options: [
      { id: 'a', text: 'Bring my business online and rank high on search engines', type: 'web-development' },
      { id: 'b', text: 'Engage customers on mobile or automate internal operations', type: 'app-development' },
      { id: 'c', text: 'Solve IT headaches, secure connections & consult experts', type: 'it-consulting' }
    ]
  },
  {
    id: 3,
    text: "What tier of investment/timeline suits your project?",
    options: [
      { id: 'a', text: 'June K500 Promo Website (Quick Turnaround)', type: 'web-development' },
      { id: 'b', text: 'Professional App Development (Continuous SLA)', type: 'app-development' },
      { id: 'c', text: 'Expert Strategic Consultation Setup', type: 'it-consulting' }
    ]
  }
];

export default function CloudQuiz() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [recommendedType, setRecommendedType] = useState<string>('web-development');
  const navigate = useNavigate();

  const handleOptionSelect = (optionId: string, type: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: optionId }));
    
    // Choose recommendation based on user choices
    setRecommendedType(type);

    if (currentQuestion < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentQuestion(prev => prev + 1), 400);
    } else {
      setTimeout(() => {
        setShowResult(true);
        triggerConfetti();
      }, 400);
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2563eb', '#06b6d4', '#ffffff']
    });
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setIsOpen(false);
  };

  const navigateToRecommendation = () => {
    navigate(`/solution/service/${recommendedType}`);
    resetQuiz();
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all shadow-blue-500/20 flex items-center justify-center group ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label="Launch project planner quiz"
      >
        <HelpCircle size={24} className="animate-pulse text-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-300 font-bold text-xs uppercase tracking-wider pl-0 group-hover:pl-2">Planner</span>
      </button>

      {/* Quiz Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetQuiz}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative bg-slate-900 w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden border border-slate-800 text-slate-100 z-10"
            >
              {/* Top Accent line */}
              <div className="w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500" />

              <div className="bg-slate-900/60 p-6 border-b border-slate-800/80 flex justify-between items-center relative overflow-hidden text-left">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />
                <h3 className="font-display font-black text-lg relative z-10 text-white uppercase tracking-tight">Project Planner Quiz</h3>
                <button onClick={resetQuiz} className="text-slate-400 hover:text-white transition-colors relative z-10 bg-slate-950/80 p-1.5 rounded-full border border-slate-800">
                  <X size={16} />
                </button>
              </div>

              <div className="p-6 sm:p-8 text-left">
                {!showResult ? (
                  <motion.div
                    key={currentQuestion}
                    initial={{ x: 15, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -15, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="flex justify-between items-center mb-6 text-[10px] font-black text-cyan-400 uppercase tracking-widest font-mono">
                      <span>Step {currentQuestion + 1} of {QUESTIONS.length}</span>
                      <div className="flex space-x-1.5">
                        {QUESTIONS.map((_, idx) => (
                          <div 
                            key={idx} 
                            className={`h-1.5 w-6 rounded-full transition-all duration-300 ${idx <= currentQuestion ? 'bg-cyan-400' : 'bg-slate-800'}`} 
                          />
                        ))}
                      </div>
                    </div>

                    <h4 className="text-lg sm:text-xl font-display font-black text-white mb-6 leading-snug">
                      {QUESTIONS[currentQuestion].text}
                    </h4>

                    <div className="space-y-3">
                      {QUESTIONS[currentQuestion].options.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => handleOptionSelect(opt.id, opt.type)}
                          className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between font-semibold ${
                            answers[currentQuestion] === opt.id 
                              ? 'border-cyan-500 bg-cyan-950/20 text-white' 
                              : 'border-slate-800 hover:border-cyan-500/30 bg-slate-950/50 hover:bg-slate-950 text-slate-300 hover:text-white'
                          }`}
                        >
                          <span className="text-xs uppercase tracking-tight leading-snug">{opt.text}</span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-4 ${
                            answers[currentQuestion] === opt.id ? 'border-cyan-400' : 'border-slate-600'
                          }`}>
                            {answers[currentQuestion] === opt.id && <div className="w-2 h-2 bg-cyan-400 rounded-full" />}
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-4"
                  >
                    <div className="w-16 h-16 bg-blue-500/10 text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-5 border border-cyan-500/20">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-display font-black text-white mb-3 uppercase tracking-tight">Quiz Complete!</h4>
                    <p className="text-slate-400 text-xs mb-8 leading-relaxed font-semibold max-w-sm mx-auto">
                      Based on your responses, we highly recommend custom development of your system setup. Let's redirect you to explore this blueprint immediately.
                    </p>
                    
                    <button
                      onClick={navigateToRecommendation}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-md active:scale-95 flex items-center justify-center"
                    >
                      Explore Suggested Service <ChevronRight className="ml-1.5" size={12} />
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
