export interface LinkedInStats {
  connections: number;
  followers: number;
  impressions: number;
  engagements: number;
  username: string;
}

export interface MetricsData {
  pageViews: Array<{ date: string; views: number }>;
}

// LinkedIn-based metrics
export const linkedInStats: LinkedInStats = {
  username: "cameron-kilgore",
  connections: 847,
  followers: 342,
  impressions: 12450,
  engagements: 856,
};

export const mockMetricsData: MetricsData = {
  pageViews: [
    { date: "Mon", views: 240 },
    { date: "Tue", views: 321 },
    { date: "Wed", views: 200 },
    { date: "Thu", views: 278 },
    { date: "Fri", views: 189 },
    { date: "Sat", views: 239 },
    { date: "Sun", views: 200 },
  ],
};
