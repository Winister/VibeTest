import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Server, Database, Network, HardDrive, Shield, Cpu, 
  Trash2, Plus, Zap, Sparkles, CheckCircle, ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ArchitectNode {
  id: string;
  type: 'server' | 'database' | 'network' | 'storage' | 'security';
  label: string;
  icon: any;
  perfWeight: number;
}

const AVAILABLE_NODES: { type: ArchitectNode['type']; label: string; icon: any; perfWeight: number; description: string }[] = [
  { type: 'server', label: 'Compute Cluster', icon: Server, perfWeight: 25, description: 'Scalable cloud server power (VMs / Kubernetes)' },
  { type: 'database', label: 'Managed DB', icon: Database, perfWeight: 15, description: 'Highly available structured datastores with sub-ms reads' },
  { type: 'network', label: 'Load Balancer', icon: Network, perfWeight: 10, description: 'Intelligent traffic routing & failover gates' },
  { type: 'storage', label: 'Object Storage', icon: HardDrive, perfWeight: 12, description: 'S3-compatible persistent object holding' },
  { type: 'security', label: 'Zero-Trust Gateway', icon: Shield, perfWeight: 20, description: 'End-to-end encryption with secure threat defenses' },
];

export default function ArchitectureConfigurator() {
  const navigate = useNavigate();
  const [nodes, setNodes] = useState<ArchitectNode[]>([
    { id: '1', type: 'network', label: 'Load Balancer', icon: Network, perfWeight: 10 },
    { id: '2', type: 'server', label: 'Compute Engine', icon: Server, perfWeight: 25 },
    { id: '3', type: 'database', label: 'Main Postgres DB', icon: Database, perfWeight: 15 }
  ]);
  
  const [traffic, setTraffic] = useState<number>(100); // in thousands/day
  const [storage, setStorage] = useState<number>(2); // in Terabytes
  const [isSecure, setIsSecure] = useState<boolean>(true);

  // Derive stats
  const [healthScore, setHealthScore] = useState<number>(92);
  const [monthlyBandwidth, setMonthlyBandwidth] = useState<number>(3);
  const [redundancyIndex, setRedundancyIndex] = useState<string>('Standard');

  useEffect(() => {
    // Dynamic formula predicting system configuration ratings
    const nodeMultiplier = Math.max(1, nodes.length);
    const hasSec = nodes.some(n => n.type === 'security');
    const hasNet = nodes.some(n => n.type === 'network');
    const hasDB = nodes.some(n => n.type === 'database');
    const hasServ = nodes.some(n => n.type === 'server');

    let score = 70;
    if (hasSec) score += 15;
    if (hasNet) score += 10;
    if (hasDB && hasServ) score += 10;
    
    // Traffic penalty if insufficient compute power
    const computeNodesCount = nodes.filter(n => n.type === 'server').length;
    if (traffic > 300 && computeNodesCount < 2) {
      score -= Math.min(25, Math.floor((traffic - 300) / 15));
    } else if (computeNodesCount >= 2) {
      score += 5;
    }

    setHealthScore(Math.min(100, Math.max(30, score)));
    setMonthlyBandwidth(Math.round((traffic * 0.03 + storage * 0.1) * 10) / 10);

    const backupRatio = nodes.length;
    if (backupRatio > 6) setRedundancyIndex('High availability Multi-Region');
    else if (backupRatio >= 3) setRedundancyIndex('Regional Redundancy');
    else setRedundancyIndex('Single Instance / Basic');
  }, [nodes, traffic, storage, isSecure]);

  const addNode = (type: ArchitectNode['type'], label: string, icon: any, perfWeight: number) => {
    if (nodes.length >= 10) return; // Limit visual canvas
    const newNode: ArchitectNode = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      label: `${label} #${nodes.filter(n => n.type === type).length + 1}`,
      icon,
      perfWeight
    };
    setNodes(prev => [...prev, newNode]);
  };

  const removeNode = (id: string) => {
    setNodes(prev => prev.filter(node => node.id !== id));
  };

  const handleConsultWithStack = () => {
    const stackDescription = nodes.map(n => n.label).join(', ');
    const message = `Hi StratByte, I designed a custom cloud architecture using your Builder Sandbox! 
Type: ${stackDescription}. 
Simulated Traffic: ${traffic}k req/day. 
Storage: ${storage} TB. 
Please help us audit and deploy this infrastructure!`;

    navigate('/contact', { state: { customMessage: message } });
  };

  return (
    <div className="w-full relative bg-white/70 backdrop-blur-md border border-gray-100 rounded-[3rem] p-6 lg:p-10 shadow-xl overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #0099B9 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      <div className="relative z-10 grid lg:grid-cols-12 gap-10">
        
        {/* Controls Column */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 text-brand-primary font-bold text-sm uppercase tracking-widest mb-2">
              <Sparkles size={16} className="text-brand-accent animate-pulse" />
              <span>Interactive Builder</span>
            </div>
            
            <h3 className="text-3xl font-display font-black text-brand-primary uppercase mb-4 leading-tight">
              StratByte <span className="text-brand-accent">Infrastructure</span> PlayGround
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Visualise server layouts in real-time. Add specialized nodes, scale global parameters, and review system configuration scores instantly to design your elite framework.
            </p>

            {/* Slider Controls */}
            <div className="space-y-6 pt-2">
              <div>
                <div className="flex justify-between text-sm font-bold text-gray-700 mb-2">
                  <span>Simulated Peak Traffic</span>
                  <span className="text-brand-primary font-mono">{traffic}k req/day</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="1000" 
                  value={traffic} 
                  onChange={(e) => setTraffic(Number(e.target.value))}
                  className="w-full accent-brand-primary cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm font-bold text-gray-700 mb-2">
                  <span>Cloud Active Storage</span>
                  <span className="text-brand-accent font-mono">{storage} TB</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="100" 
                  value={storage} 
                  onChange={(e) => setStorage(Number(e.target.value))}
                  className="w-full accent-brand-accent cursor-pointer"
                />
              </div>
            </div>

            {/* Add Node Panel */}
            <div className="mt-8">
              <span className="text-xs uppercase font-black text-gray-400 tracking-wider block mb-4">Click to Add Components</span>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3">
                {AVAILABLE_NODES.map((node) => {
                  const Icon = node.icon;
                  return (
                    <button
                      key={node.type}
                      onClick={() => addNode(node.type, node.label, node.icon, node.perfWeight)}
                      disabled={nodes.length >= 10}
                      className="group flex flex-col justify-center items-center p-3 rounded-2xl border border-gray-100 hover:border-brand-primary/30 bg-white hover:bg-gray-50/50 transition-all text-center relative hover:-translate-y-0.5 shadow-sm active:scale-95 disabled:opacity-50"
                    >
                      <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-2 group-hover:scale-110 transition-transform">
                        <Icon size={18} />
                      </div>
                      <span className="text-xs font-bold text-gray-800 tracking-tight">{node.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <button
              onClick={handleConsultWithStack}
              className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-brand-primary/90 transition-all shadow-[0_10px_30px_rgba(0,153,185,0.2)] hover:-translate-y-0.5 active:scale-95 text-base"
            >
              <span>Adopt this Architecture</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Visual Canvas Column */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          
          {/* Canvas Box */}
          <div className="flex-1 bg-gray-50/50 rounded-[2.5rem] border border-gray-100 relative min-h-[350px] p-6 overflow-hidden flex flex-col justify-between">
            
            {/* Connection Dashboard lines */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M 50 180 Q 250 100, 450 180 T 650 180" 
                  fill="none" 
                  stroke="url(#glowingGrad)" 
                  strokeWidth="2" 
                  strokeDasharray="8 6"
                  className="animate-[dash_20s_linear_infinite]"
                />
                <defs>
                  <linearGradient id="glowingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0099B9" />
                    <stop offset="100%" stopColor="#9955BB" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="flex justify-between items-center relative z-10 mb-4">
              <span className="text-xs uppercase font-black tracking-widest text-gray-400 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100 flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2" />
                Live Architecture State ({nodes.length} / 10 Nodes)
              </span>
              {nodes.length > 0 && (
                <button 
                  onClick={() => setNodes([])}
                  className="text-xs font-bold text-red-500 hover:text-red-700 transition-colors flex items-center"
                >
                  Clear Canvas
                </button>
              )}
            </div>

            {/* Dynamic Grid Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-auto relative z-10 min-h-[220px] items-center">
              <AnimatePresence>
                {nodes.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="col-span-full py-12 text-center text-gray-400 flex flex-col items-center justify-center"
                  >
                    <Plus size={36} className="text-brand-primary animate-bounce mb-3" />
                    <p className="font-medium text-sm">Your cloud canvas is currently empty.</p>
                    <p className="text-xs text-gray-400 mt-1">Add components to start designing your stack</p>
                  </motion.div>
                ) : (
                  nodes.map((node, i) => {
                    const NodeIcon = node.icon;
                    return (
                      <motion.div
                        key={node.id}
                        initial={{ scale: 0.8, opacity: 0, y: 15 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: -15 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="bg-white border border-gray-100 hover:border-brand-primary/40 rounded-2xl p-4 flex flex-col items-center relative group shadow-sm hover:shadow-md transition-all h-[110px] justify-center text-center"
                      >
                        <button
                          onClick={() => removeNode(node.id)}
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600 transition-all p-1 hover:bg-red-50 rounded-full"
                          title="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>

                        <div className="w-10 h-10 bg-brand-primary/5 group-hover:bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-2 transition-colors">
                          <NodeIcon size={20} className="group-hover:rotate-12 transition-transform" />
                        </div>
                        
                        <span className="text-xs font-bold text-gray-800 line-clamp-1 h-3.5 leading-none">
                          {node.label}
                        </span>
                      </motion.div>
                    );
                  })
                )}
              </AnimatePresence>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap justify-between items-center relative z-10 gap-2">
              <span className="text-xs text-gray-400 italic">Nodes automatically form isolated microservices routing</span>
              <span className="text-[10px] font-mono text-gray-400 tracking-wider">SECURE BACKPLANE ENGAGED</span>
            </div>
          </div>

          {/* Vitals & Real-time Estimates Box */}
          <div className="bg-[#fcfcfc] rounded-3xl p-6 border border-gray-100 grid sm:grid-cols-3 gap-6">
            
            <div className="flex flex-col space-y-1">
              <span className="text-xs uppercase font-black tracking-widest text-gray-400">Architecture Score</span>
              <div className="flex items-baseline space-x-1 pt-1">
                <span className="text-3xl font-display font-black text-brand-primary">{healthScore}%</span>
                <span className="text-xs text-green-500 font-bold">Optimal</span>
              </div>
              <p className="text-[11px] text-gray-500 pt-1 leading-snug">Based on secure network node count and traffic load</p>
            </div>

            <div className="flex flex-col space-y-1">
              <span className="text-xs uppercase font-black tracking-widest text-gray-400">Monthly Network Flow</span>
              <div className="flex items-baseline space-x-1 pt-1">
                <span className="text-3xl font-display font-black text-brand-accent">{monthlyBandwidth} TB</span>
                <span className="text-xs text-brand-primary font-bold">Traffic</span>
              </div>
              <p className="text-[11px] text-gray-500 pt-1 leading-snug">Calculated dynamic data packet transfer estimate</p>
            </div>

            <div className="flex flex-col space-y-1">
              <span className="text-xs uppercase font-black tracking-widest text-gray-400">System Redundancy</span>
              <div className="flex items-baseline space-x-1 pt-1">
                <span className="text-base font-bold text-gray-800 leading-tight block">{redundancyIndex}</span>
              </div>
              <p className="text-[11px] text-gray-500 pt-1 leading-snug">Automated replication and failure threshold level</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
