import { Home, Brain, Cpu, FolderOpen, HeartPulse, Settings, Terminal, Map, Radio } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { icon: Home, label: 'HOME', id: 'home' },
  { icon: Brain, label: 'MEMORY', id: 'memory' },
  { icon: Cpu, label: 'AGENTS', id: 'agents' },
  { icon: FolderOpen, label: 'PROJECTS', id: 'projects' },
  { icon: Terminal, label: 'TERMINAL', id: 'terminal' },
  { icon: HeartPulse, label: 'HEALTH', id: 'health' },
  { icon: Map, label: 'RADAR', id: 'radar' },
  { icon: Settings, label: 'SETTINGS', id: 'settings' },
];

export default function SideNav() {
  const [active, setActive] = useState('home');

  return (
    <div className="w-20 md:w-64 glass-panel border-l-0 border-y-0 h-full flex flex-col pt-6 pb-4 transition-all duration-300 z-40">
      <div className="px-6 mb-8 hidden md:block">
        <h2 className="font-mono text-xs text-jarvis-blue/50 tracking-[0.2em]">NAVIGATION</h2>
      </div>
      
      <div className="flex-1 flex flex-col space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex items-center px-6 py-3 w-full transition-all duration-200 relative group
              ${active === item.id ? 'bg-jarvis-blue-dim/30' : 'hover:bg-jarvis-panel'}
            `}
          >
            {active === item.id && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-jarvis-blue shadow-[0_0_10px_#00d2ff]"></div>
            )}
            
            <item.icon className={`w-5 h-5 transition-colors ${
              active === item.id ? 'text-jarvis-blue' : 'text-jarvis-blue/50 group-hover:text-jarvis-blue/80'
            }`} />
            
            <span className={`ml-4 font-mono text-sm tracking-widest hidden md:block transition-colors ${
              active === item.id ? 'neon-text-blue' : 'text-jarvis-blue/50 group-hover:text-jarvis-blue/80'
            }`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <div className="px-6 mt-auto">
        <div className="p-4 border border-jarvis-blue-dim rounded bg-[#020610]/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-jarvis-blue to-transparent opacity-50"></div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] text-jarvis-blue/70">WAKE WORD</span>
            <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
          </div>
          <div className="font-mono text-xs text-jarvis-blue font-bold tracking-widest">
            "JARVIS"
          </div>
          <div className="mt-2 text-[9px] font-sans text-jarvis-blue/40">
            CONTINUOUS LISTENING: ON
          </div>
        </div>
      </div>
    </div>
  );
}
