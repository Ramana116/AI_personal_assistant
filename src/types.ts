export type AgentStatus = 'idle' | 'active' | 'processing' | 'offline';

export interface SystemMetrics {
  cpu: number;
  ram: number;
  gpu: number;
  network: number;
  time: string;
}

export interface Task {
  id: string;
  title: string;
  status: 'pending' | 'in-progress' | 'completed';
  time: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'jarvis' | 'system';
  text: string;
  timestamp: Date;
}
