/**
 * Mock video data for the tube platform
 * Uses simulated Bunny.net domains
 */

export interface HelperTag {
  id: number;
  label: string;
}

export interface Video {
  id: string;
  slug: string; // SEO friendly URL part
  title: string;
  description: string;
  thumbnail: string;
  preview?: string; // Animated preview URL (webp)
  author: string;
  duration: string;
  views: number;
  uploadedAt: string;
  category: string;
  tags: string[];
  hlsUrl: string;
}

// Simulated Bunny.net CDN URLs
const CDN_BASE = "https://cdn.leakpornofr.com";

export const mockVideos: Video[] = [
  {
    id: "vid-001",
    slug: "step-sister-stuck-in-washing-machine-pov",
    title: "Step Sister Stuck in Washing Machine POV",
    description: "POV experience with step sister stuck in the laundry room.",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2940",
    author: "StepFantasy",
    duration: "12:45",
    views: 12500,
    uploadedAt: "2024-01-15",
    category: "Step Fantasy",
    tags: ["Step Fantasy", "StepFantasy"],
    hlsUrl: `${CDN_BASE}/videos/vid-001/playlist.m3u8`
  },
  {
    id: "vid-002",
    slug: "ebony-babe-oil-massage-full-service",
    title: "Ebony Babe Oil Massage Full Service",
    description: "Relaxing oil massage that turns into a full service happy ending.",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2940",
    author: "EbonyLove",
    duration: "24:10",
    views: 8900,
    uploadedAt: "2024-01-14",
    category: "Ebony",
    tags: ["Ebony", "EbonyLove"],
    hlsUrl: `${CDN_BASE}/videos/vid-002/playlist.m3u8`
  },
  {
    id: "vid-003",
    slug: "japanese-schoolgirl-library-study-session",
    title: "Japanese Schoolgirl Library Study Session",
    description: "Quiet study session in the library gets very loud very quickly.",
    thumbnail: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=2940",
    author: "AsianAngel",
    duration: "18:30",
    views: 32000,
    uploadedAt: "2024-01-13",
    category: "Asian",
    tags: ["Asian", "AsianAngel"],
    hlsUrl: `${CDN_BASE}/videos/vid-003/playlist.m3u8`
  },
  {
    id: "vid-004",
    slug: "milf-teacher-punishes-bad-student",
    title: "Milf Teacher Punishes Bad Student",
    description: "Strict teacher teaches her bad student a lesson he won't forget.",
    thumbnail: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=2940",
    author: "MilfHunter",
    duration: "31:05",
    views: 45000,
    uploadedAt: "2024-01-12",
    category: "MILF",
    tags: ["MILF", "MilfHunter"],
    hlsUrl: `${CDN_BASE}/videos/vid-004/playlist.m3u8`
  },
  {
    id: "vid-005",
    slug: "amateur-couple-first-time-anal",
    title: "Amateur Couple First Time Anal",
    description: "Real amateur couple tries anal for the very first time. Real reactions.",
    thumbnail: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&q=80&w=2940",
    author: "RealCouples",
    duration: "15:20",
    views: 6700,
    uploadedAt: "2024-01-11",
    category: "Amateur",
    tags: ["Amateur", "RealCouples"],
    hlsUrl: `${CDN_BASE}/videos/vid-005/playlist.m3u8`
  },
  {
    id: "vid-006",
    slug: "big-titty-goth-girlfriend-riding",
    title: "Big Titty Goth Girlfriend Riding",
    description: "Goth girlfriend with massive tits rides cowgirl style.",
    thumbnail: "https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?auto=format&fit=crop&q=80&w=2940",
    author: "GothGirls",
    duration: "09:55",
    views: 21000,
    uploadedAt: "2024-01-10",
    category: "Big Tits",
    tags: ["Big Tits", "GothGirls"],
    hlsUrl: `${CDN_BASE}/videos/vid-006/playlist.m3u8`
  }
];

export const categories = [
  'Tous',
  'Step Fantasy',
  'Ebony',
  'Asian',
  'MILF',
  'Amateur',
  'Big Tits',
];

export const getVideoById = (id: string): Video | undefined => {
  return mockVideos.find(video => video.id === id);
};

export const getVideoBySlug = (slug: string): Video | undefined => {
  return mockVideos.find(video => video.slug.toLowerCase() === slug.toLowerCase());
};

export const getRelatedVideos = (currentId: string, limit = 6): Video[] => {
  return mockVideos
    .filter(video => video.id !== currentId)
    .slice(0, limit);
};

export const formatViews = (views: number): string => {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M vues`;
  }
  if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K vues`;
  }
  return `${views} vues`;
};
