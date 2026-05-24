import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, X, ChevronRight, Server, Shield, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useNavigate } from 'react-router-dom';

const QUESTIONS = [
  {
    id: 1,
    text: "How is your current IT infrastructure primarily managed?",
    options: [
      { id: 'a', text: 'Mostly On-Premises Servers', score: 10, type: 'infrastructure' },
      { id: 'b', text: 'Mixed / Hybrid Setup', score: 20, type: 'cloud-vpn' },
      { id: 'c', text: 'Fully in the Cloud', score: 30, type: 'data-analytics' }
    ]
  },
  {
    id: 2,
    text: "What is your biggest current challenge?",
    options: [
      { id: 'a', text: 'Scaling during peak traffic', score: 10, type: 'virtual-machines' },
      { id: 'b', text: 'Security and remote access', score: 20, type: 'cloud-vpn' },
      { id: 'c', text: 'Understanding our data', score: 30, type: 'data-analytics' }
    ]
  },
  {
    id: 3,
    text: "How frequently do you back up critical data?",
    options: [
      { id: 'a', text: 'Once a month or less', score: 10, type: 'data-backups' },
      { id: 'b', text: 'Weekly', score: 20, type: 'data-backups' },
      { id: 'c', text: 'Daily automatic backups', score: 30, type: 'compute' }
    ]
  }
];

export default function CloudQuiz() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [recommendedType, setRecommendedType] = useState<string>('it-consulting');
  const navigate = useNavigate();

  const handleOptionSelect = (optionId: string, type: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: optionId }));
    
    // Simple logic: the last option's type becomes the recommendation
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
    // Determine if it's a service or product by checking our constants
    // For simplicity, we assume they're services unless it's data-backups
    const type = recommendedType === 'data-backups' ? 'product' : 'service';
    navigate(`/solution/${type}/${recommendedType}`);
    resetQuiz();
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-brand-accent text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all shadow-brand-accent/40 flex items-center justify-center ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <Target size={28} className="animate-pulse" />
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
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden border border-brand-primary/10"
            >
              <div className="bg-gray-50 p-6 text-gray-900 border-b border-gray-100 flex justify-between items-center relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-brand-primary/5 rounded-full blur-xl" />
                <h3 className="font-display font-bold text-xl relative z-10 text-brand-primary">Cloud Readiness Quiz</h3>
                <button onClick={resetQuiz} className="text-gray-400 hover:text-gray-900 transition-colors relative z-10 bg-white shadow-sm p-1.5 rounded-full">
                  <X size={20} />
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
                    <div className="flex justify-between items-center mb-6 text-sm font-bold text-brand-primary/50">
                      <span>Question {currentQuestion + 1} of {QUESTIONS.length}</span>
                      <div className="flex space-x-1">
                        {QUESTIONS.map((_, idx) => (
                          <div 
                            key={idx} 
                            className={`h-1.5 w-6 rounded-full ${idx <= currentQuestion ? 'bg-brand-accent' : 'bg-gray-200'}`} 
                          />
                        ))}
                      </div>
                    </div>

                    <h4 className="text-2xl font-bold text-gray-800 mb-8 leading-tight">
                      {QUESTIONS[currentQuestion].text}
                    </h4>

                    <div className="space-y-3">
                      {QUESTIONS[currentQuestion].options.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => handleOptionSelect(opt.id, opt.type)}
                          className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
                            answers[currentQuestion] === opt.id 
                              ? 'border-brand-accent bg-brand-accent/5' 
                              : 'border-gray-100 hover:border-brand-primary/30 hover:bg-gray-50'
                          }`}
                        >
                          <span className="font-medium text-gray-700">{opt.text}</span>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
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
                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h4 className="text-3xl font-display font-black text-brand-primary mb-4">Quiz Complete!</h4>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Based on your responses, we highly recommend booking a consultation or exploring our customized solutions to upgrade your stack.
                    </p>
                    
                    <button
                      onClick={navigateToRecommendation}
                      className="w-full bg-brand-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-accent/90 transition-all shadow-lg active:scale-95 flex items-center justify-center"
                    >
                      View Recommended Solution <ChevronRight className="ml-2" />
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
