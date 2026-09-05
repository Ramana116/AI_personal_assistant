import { useState, useEffect } from 'react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { motion } from 'motion/react';
import { Activity, Server, Database } from 'lucide-react';

const generateData = () => Array.from({ length: 20 }, (_, i) => ({
  time: i,
  value: Math.floor(Math.random() * 40) + 20
}));

export default function ContextPanel() {
  const [cpuData, setCpuData] = useState(generateData());
  const [ramData, setRamData] = useState(generateData());

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuData(prev => [...prev.slice(1), { time: prev[prev.length - 1].time + 1, value: Math.floor(Math.random() * 60) + 20 }]);
      setRamData(prev => [...prev.slice(1), { time: prev[prev.length - 1].time + 1, value: Math.floor(Math.random() * 20) + 60 }]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const agents = [
    { name: 'VISION_CORE', status: 'IDLE', color: 'text-jarvis-blue' },
    { name: 'RESEARCH_OP', status: 'ACTIVE', color: 'text-jarvis-amber neon-text-amber' },
    { name: 'SEC_AUDIT', status: 'SCANNING', color: 'text-emerald-400' }
  ];

  return (
    <div className="w-64 glass-panel border-r-0 border-y-0 h-full flex flex-col p-4 space-y-6 z-40 hidden xl:flex overflow-y-auto hide-scrollbar">
      
      <div className="space-y-2">
        <div className="flex items-center justify-between mb-2">
           <h3 className="font-mono text-[10px] tracking-[0.2em] text-jarvis-blue/70 flex items-center">
             <Activity className="w-3 h-3 mr-2" /> CORE METRICS
           </h3>
        </div>
        
        <div className="border border-jarvis-blue-dim bg-[#020610]/50 rounded p-2 relative">
          <div className="flex justify-between font-mono text-[9px] text-jarvis-blue mb-1">
            <span>CPU UTILIZATION</span>
            <span>{cpuData[cpuData.length - 1].value}%</span>
          </div>
          <div className="h-16 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cpuData}>
                <defs>
                  <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00d2ff" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00d2ff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="value" stroke="#00d2ff" strokeWidth={1} fillOpacity={1} fill="url(#colorCpu)" isAnimationActive={false} />
                <YAxis domain={[0, 100]} hide />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="border border-jarvis-amber-dim bg-[#020610]/50 rounded p-2 relative">
          <div className="flex justify-between font-mono text-[9px] text-jarvis-amber mb-1">
            <span>MEMORY ALLOCATION</span>
            <span>{ramData[ramData.length - 1].value}%</span>
          </div>
          <div className="h-16 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={ramData}>
                <defs>
                  <linearGradient id="colorRam" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ffb703" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ffb703" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="value" stroke="#ffb703" strokeWidth={1} fillOpacity={1} fill="url(#colorRam)" isAnimationActive={false} />
                <YAxis domain={[0, 100]} hide />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <h3 className="font-mono text-[10px] tracking-[0.2em] text-jarvis-blue/70 flex items-center mb-4">
          <Server className="w-3 h-3 mr-2" /> ACTIVE SUB-AGENTS
        </h3>
        
        <div className="space-y-3">
          {agents.map((agent, i) => (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              key={agent.name} 
              className="flex items-center justify-between border border-jarvis-blue-dim/50 p-2 rounded bg-jarvis-panel/30"
            >
              <span className={`font-mono text-[10px] ${agent.color}`}>{agent.name}</span>
              <span className="font-mono text-[8px] tracking-widest text-gray-500">{agent.status}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-auto">
        <h3 className="font-mono text-[10px] tracking-[0.2em] text-jarvis-blue/70 flex items-center mb-2">
          <Database className="w-3 h-3 mr-2" /> LOCAL STORAGE
        </h3>
        <div className="flex flex-col space-y-1 font-mono text-[9px] text-jarvis-blue/50">
          <div className="flex justify-between">
            <span>VECTOR DB</span>
            <span>4.2 GB</span>
          </div>
          <div className="w-full bg-jarvis-blue-dim h-1 rounded-full overflow-hidden">
             <div className="bg-jarvis-blue h-full w-[42%] shadow-[0_0_5px_#00d2ff]"></div>
          </div>
        </div>
      </div>

    </div>
  );
}
