export const endpoints = {
  getMetrics: "applications/metrics",
  getReferralStats: "applications/referrals",
  getReferralStatsBySource: (source: string) =>
    `applications/referrals?referral=${source}`,
  getApplications: "applications",
};
