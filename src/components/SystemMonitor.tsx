import { Cpu, Wifi, HardDrive, Activity, Zap, Mic } from 'lucide-react';

export default function SystemMonitor() {
  return (
    <div className="h-12 border-t border-jarvis-blue-dim bg-[#020610]/80 backdrop-blur-md flex items-center px-4 justify-between font-mono text-[10px] sm:text-xs text-jarvis-blue/70">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <Cpu className="w-4 h-4 text-jarvis-amber" />
          <span>CPU: 14% [4.2GHz]</span>
        </div>
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-jarvis-amber" />
          <span>GPU: 32% [74°C]</span>
        </div>
        <div className="flex items-center space-x-2 hidden md:flex">
          <HardDrive className="w-4 h-4" />
          <span>RAM: 18.4/64GB</span>
        </div>
        <div className="flex items-center space-x-2 hidden lg:flex">
          <Wifi className="w-4 h-4" />
          <span>NET: 1.2GB/s [SECURE]</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <Zap className="w-4 h-4 text-jarvis-blue neon-text-blue" />
          <span>MODEL: LLAMA-3-70B [LOCAL]</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mic className="w-4 h-4 text-red-500 animate-pulse" />
          <span className="text-red-400">VOICE: LISTENING</span>
        </div>
      </div>
    </div>
  );
}
