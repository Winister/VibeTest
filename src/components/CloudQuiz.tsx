import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, X, ChevronRight, CheckCircle2, MessageSquare, Code, Smartphone, HelpCircle } from 'lucide-react';
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
      { id: 'c', text: 'Solve severe IT headaches, secure connections & consult experts', type: 'it-consulting' }
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
      colors: ['#0099B9', '#9955BB', '#ffffff']
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
        className={`fixed bottom-6 right-6 z-40 bg-brand-primary text-white p-4.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all shadow-brand-primary/40 flex items-center justify-center ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label="Launch project planner quiz"
      >
        <HelpCircle size={28} className="animate-pulse text-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold text-xs uppercase tracking-wider pl-0 group-hover:pl-2">Planner</span>
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
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-150"
            >
              <div className="bg-gray-50 p-6 text-gray-900 border-b border-gray-100 flex justify-between items-center relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-brand-primary/5 rounded-full blur-xl" />
                <h3 className="font-display font-black text-xl relative z-10 text-brand-primary uppercase tracking-tight">Project Planner Quiz</h3>
                <button onClick={resetQuiz} className="text-gray-400 hover:text-gray-900 transition-colors relative z-10 bg-white shadow-sm p-1.5 rounded-full border border-gray-100">
                  <X size={18} />
                </button>
              </div>

              <div className="p-8">
                {!showResult ? (
                  <motion.div
                    key={currentQuestion}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                  >
                    <div className="flex justify-between items-center mb-6 text-xs font-black text-brand-primary/60 uppercase tracking-widest">
                      <span>Step {currentQuestion + 1} of {QUESTIONS.length}</span>
                      <div className="flex space-x-1.5">
                        {QUESTIONS.map((_, idx) => (
                          <div 
                            key={idx} 
                            className={`h-1.5 w-6 rounded-full transition-all duration-350 ${idx <= currentQuestion ? 'bg-brand-accent' : 'bg-gray-200'}`} 
                          />
                        ))}
                      </div>
                    </div>

                    <h4 className="text-xl md:text-2xl font-display font-black text-gray-905 mb-8 leading-tight">
                      {QUESTIONS[currentQuestion].text}
                    </h4>

                    <div className="space-y-3">
                      {QUESTIONS[currentQuestion].options.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => handleOptionSelect(opt.id, opt.type)}
                          className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between ${
                            answers[currentQuestion] === opt.id 
                              ? 'border-brand-accent bg-brand-accent/5' 
                              : 'border-gray-100 hover:border-brand-primary/30 hover:bg-gray-50/50'
                          }`}
                        >
                          <span className="font-bold text-xs text-gray-750 uppercase tracking-tight leading-snug">{opt.text}</span>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ml-4 ${
                            answers[currentQuestion] === opt.id ? 'border-brand-accent' : 'border-gray-300'
                          }`}>
                            {answers[currentQuestion] === opt.id && <div className="w-2.5 h-2.5 bg-brand-accent rounded-full" />}
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <div className="w-20 h-20 bg-emerald-50 text-emerald-555 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-100 shadow-xs">
                      <CheckCircle2 size={40} className="text-emerald-500" />
                    </div>
                    <h4 className="text-2xl md:text-3xl font-display font-black text-brand-primary mb-4 uppercase tracking-tight">Quiz Complete!</h4>
                    <p className="text-gray-500 text-sm mb-8 leading-relaxed font-semibold max-w-sm mx-auto">
                      Based on your responses, we highly recommend custom development of your system setup. Let's redirect you to explore this blueprint immediately.
                    </p>
                    
                    <button
                      onClick={navigateToRecommendation}
                      className="w-full bg-brand-accent text-white py-4.5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-brand-accent/90 transition-all shadow-md active:scale-95 flex items-center justify-center"
                    >
                      Explore Suggested Service <ChevronRight className="ml-1.5" size={14} />
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
