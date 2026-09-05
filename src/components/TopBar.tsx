import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Cloud, Search, User, ShieldCheck } from 'lucide-react';

export default function TopBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-16 w-full glass-panel flex items-center justify-between px-6 z-50">
      <div className="flex items-center space-x-4">
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-jarvis-blue">
          <div className="absolute inset-0 rounded-full border border-jarvis-blue animate-[spin_4s_linear_infinite] border-t-transparent"></div>
          <div className="absolute inset-1 rounded-full border border-jarvis-amber animate-[spin_3s_linear_infinite_reverse] border-b-transparent opacity-70"></div>
          <div className="w-4 h-4 bg-jarvis-blue rounded-full shadow-[0_0_10px_#00d2ff] animate-pulse"></div>
        </div>
        <div className="flex flex-col">
          <span className="font-sans font-bold tracking-widest text-lg neon-text-blue leading-none">J.A.R.V.I.S.</span>
          <span className="font-mono text-[9px] tracking-widest text-jarvis-amber">SYSTEM ONLINE</span>
        </div>
      </div>

      <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-jarvis-blue/50" />
        </div>
        <input 
          type="text" 
          placeholder="Awaiting voice or text input..." 
          className="w-full bg-[#020610]/50 border border-jarvis-blue-dim rounded-full py-2 pl-10 pr-4 font-mono text-sm text-jarvis-blue placeholder-jarvis-blue/30 focus:outline-none focus:border-jarvis-blue/50 transition-colors"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
           <span className="font-mono text-[10px] text-jarvis-blue/40 border border-jarvis-blue-dim px-1.5 rounded">⌘K</span>
        </div>
      </div>

      <div className="flex items-center space-x-6 font-mono text-sm">
        <div className="flex flex-col items-end">
          <span className="text-jarvis-blue font-bold tracking-wider">{format(time, 'HH:mm:ss')}</span>
          <span className="text-jarvis-blue/60 text-[10px]">{format(time, 'yyyy.MM.dd')}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-jarvis-blue/80 border-l border-jarvis-blue-dim pl-6">
          <Cloud className="w-5 h-5 text-jarvis-blue" />
          <div className="flex flex-col">
            <span>72°F</span>
            <span className="text-[10px] text-jarvis-blue/50">Malibu</span>
          </div>
        </div>

        <div className="flex items-center space-x-3 border-l border-jarvis-blue-dim pl-6">
           <ShieldCheck className="w-5 h-5 text-emerald-400" />
           <div className="w-8 h-8 rounded-full border border-jarvis-amber flex items-center justify-center bg-jarvis-panel">
              <User className="w-4 h-4 text-jarvis-amber" />
           </div>
        </div>
      </div>
    </div>
  );
}
