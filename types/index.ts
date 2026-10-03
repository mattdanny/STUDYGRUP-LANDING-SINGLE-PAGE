export interface LinkItem {
  id: string;
  title: string;
  category: 'portal' | 'mirror' | 'app' | 'tool';
  url: string;
  badge: string;
  status: 'online' | 'standby' | 'maintenance';
  serverLocation: string;
  latencyMs: number;
  description: string;
  isRecommended?: boolean;
}

export interface CommunityGroup {
  id: string;
  name: string;
  platform: 'whatsapp' | 'telegram' | 'discord';
  members: string;
  maxMembers?: string;
  topic: string;
  link: string;
  badge: string;
  activeNow: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
