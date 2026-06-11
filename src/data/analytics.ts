export interface LinkedInStats {
  connections: number;
  impressions: number;
  username: string;
}   

export interface MetricsData {
  pageViews: Array<{ date: string; views: number }>;
}

// LinkedIn-based metrics
export const linkedInStats: LinkedInStats = {
  username: "cameron-kilgore",
  connections: 7325,
  impressions: 15743,
};