import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mic, Code, Terminal, Zap, CheckCircle2 } from 'lucide-react';
import { ChatMessage, Task } from '../types';

export default function MainWorkspace() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', sender: 'jarvis', text: 'Good evening, sir. The local network is secure and all sub-routines are functioning optimally. How may I assist you tonight?', timestamp: new Date() }
  ]);

  const [tasks] = useState<Task[]>([
    { id: 't1', title: 'Compile new kernel modules', status: 'completed', time: '18:45' },
    { id: 't2', title: 'Analyze external network traffic', status: 'in-progress', time: '19:02' },
    { id: 't3', title: 'Prepare daily briefing', status: 'pending', time: '--:--' }
  ]);

  // Simulate audio waveform
  const [wave, setWave] = useState(Array.from({ length: 40 }, () => 10));

  useEffect(() => {
    const interval = setInterval(() => {
      setWave(Array.from({ length: 40 }, () => Math.random() * 40 + 10));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 h-full flex flex-col p-6 space-y-6 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at center, rgba(0,210,255,0.1) 0%, transparent 70%)',
             backgroundSize: '100% 100%' 
           }}>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-jarvis-blue-dim/20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-jarvis-blue-dim/40 pointer-events-none border-dashed animate-[spin_60s_linear_infinite]"></div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0 relative z-10">
        
        {/* Chat / Interaction Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 glass-panel rounded-lg flex flex-col overflow-hidden"
        >
          <div className="px-4 py-3 border-b border-jarvis-blue-dim flex items-center justify-between">
            <h3 className="font-mono text-xs tracking-widest text-jarvis-blue">COMMUNICATION LINK</h3>
            <span className="font-mono text-[9px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">SECURE</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 hide-scrollbar">
            {messages.map((msg) => (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                key={msg.id} 
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <span className="font-mono text-[9px] text-jarvis-blue/40 mb-1">
                  {msg.sender.toUpperCase()} // {msg.timestamp.toLocaleTimeString()}
                </span>
                <div className={`
                  px-4 py-2 max-w-[80%] font-sans text-sm
                  ${msg.sender === 'jarvis' 
                    ? 'border-l-2 border-jarvis-blue bg-jarvis-blue/5 text-jarvis-blue' 
                    : 'bg-jarvis-panel border border-jarvis-blue-dim text-gray-300 rounded'}
                `}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-4 border-t border-jarvis-blue-dim bg-[#020610]/40">
             <div className="flex items-center space-x-4">
                <div className="h-10 flex items-end space-x-0.5 flex-1 overflow-hidden">
                  {wave.map((h, i) => (
                    <motion.div 
                      key={i} 
                      className="w-1 bg-jarvis-blue rounded-t"
                      animate={{ height: h }}
                      transition={{ type: "tween", duration: 0.1 }}
                      style={{ opacity: 0.4 + (h / 50) }}
                    />
                  ))}
                </div>
                <button className="w-10 h-10 rounded-full border border-jarvis-amber text-jarvis-amber flex items-center justify-center hover:bg-jarvis-amber/10 transition-colors shadow-[0_0_10px_rgba(255,183,3,0.2)] group">
                  <Mic className="w-5 h-5 group-hover:animate-pulse" />
                </button>
             </div>
             <div className="mt-2 text-center font-mono text-[10px] text-jarvis-blue/60 tracking-widest">
               LISTENING...
             </div>
          </div>
        </motion.div>

        {/* Status & Quick Actions */}
        <div className="space-y-6 flex flex-col">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-panel-amber rounded-lg p-4"
          >
            <div className="flex items-center justify-between mb-4">
               <h3 className="font-mono text-xs tracking-widest text-jarvis-amber neon-text-amber">CURRENT DIRECTIVE</h3>
               <div className="w-2 h-2 rounded-full bg-jarvis-amber animate-pulse shadow-[0_0_8px_#ffb703]"></div>
            </div>
            
            <div className="space-y-3">
              {tasks.map(task => (
                <div key={task.id} className="flex items-start justify-between border-b border-jarvis-amber-dim pb-2 last:border-0">
                  <div className="flex flex-col">
                    <span className={`font-mono text-xs ${task.status === 'completed' ? 'text-jarvis-amber/40 line-through' : 'text-jarvis-amber'}`}>
                      {task.title}
                    </span>
                    <span className="font-mono text-[9px] text-jarvis-amber/50 mt-1">
                      STATUS: {task.status.toUpperCase()}
                    </span>
                  </div>
                  {task.status === 'completed' && <CheckCircle2 className="w-4 h-4 text-jarvis-amber/40" />}
                  {task.status === 'in-progress' && <div className="w-4 h-4 border border-jarvis-amber border-t-transparent rounded-full animate-spin"></div>}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-panel rounded-lg p-4 flex-1"
          >
            <h3 className="font-mono text-xs tracking-widest text-jarvis-blue mb-4">QUICK PROTOCOLS</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Terminal, label: 'DEPLOY ENV' },
                { icon: Code, label: 'SCAN CODE' },
                { icon: Zap, label: 'OVERRIDE' },
                { icon: ShieldCheck, label: 'LOCKDOWN' }
              ].map((action, i) => (
                <button key={i} className="border border-jarvis-blue-dim bg-jarvis-blue/5 hover:bg-jarvis-blue/20 p-3 rounded flex flex-col items-center justify-center transition-all group">
                  <action.icon className="w-5 h-5 text-jarvis-blue/60 group-hover:text-jarvis-blue group-hover:drop-shadow-[0_0_5px_#00d2ff] mb-2" />
                  <span className="font-mono text-[9px] text-jarvis-blue tracking-wider">{action.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Ensure ShieldCheck is imported, it was missing in the destructure
import { ShieldCheck } from 'lucide-react';
