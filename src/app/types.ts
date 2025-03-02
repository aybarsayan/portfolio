export interface Project {
  title: string;
  description: string;
  videoId: string;
  techStack: string[];
  link: string;
}

// Existing Window interface
interface Window {
  YT: any;
  onYouTubeIframeAPIReady: () => void;
} 