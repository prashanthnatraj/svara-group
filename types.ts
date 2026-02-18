
export interface BrandFeatureProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  connection?: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
  reverse?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
