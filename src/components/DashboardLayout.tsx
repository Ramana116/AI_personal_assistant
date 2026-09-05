import React from 'react';
import TopBar from './TopBar';
import SideNav from './SideNav';
import SystemMonitor from './SystemMonitor';
import ContextPanel from './ContextPanel';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-[#020610] text-gray-200">
      <TopBar />
      
      <div className="flex-1 flex overflow-hidden">
        <SideNav />
        
        <main className="flex-1 overflow-hidden relative">
          {children}
        </main>
        
        <ContextPanel />
      </div>
      
      <SystemMonitor />
    </div>
  );
}
