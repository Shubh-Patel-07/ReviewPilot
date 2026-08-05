export type Role = 'super_admin' | 'business_owner';

export type SubscriptionStatus = 'active' | 'canceled' | 'past_due' | 'trialing';

export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';

export interface User {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  role: Role;
  created_at: string;
}

export interface Business {
  id: string;
  owner_id: string;
  name: string;
  logo_url?: string;
  category?: string;
  phone?: string;
  email?: string;
  address?: string;
  google_review_url: string;
  website?: string;
  social_links?: Record<string, string>;
  created_at: string;
}

export interface Location {
  id: string;
  business_id: string;
  name: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  country?: string;
}

export interface QRCodeItem {
  id: string;
  business_id: string;
  location_id?: string;
  qr_type: 'dynamic' | 'static';
  design_config: {
    fg_color?: string;
    bg_color?: string;
    logo_embedded?: boolean;
  };
  short_url: string;
  target_url: string;
  scan_count: number;
  is_active: boolean;
  created_at: string;
}

export interface ReviewDraft {
  id: string;
  qr_code_id?: string;
  business_id: string;
  rating: number;
  customer_feedback?: string;
  ai_draft: string;
  language: string;
  tone: string;
  is_copied: boolean;
  is_google_opened: boolean;
  created_at: string;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  billing_cycle: 'monthly' | 'yearly';
  qr_limit: number;
  scan_limit: number;
  features: string[];
  is_active: boolean;
}

export interface Subscription {
  id: string;
  business_id: string;
  plan_id: string;
  status: SubscriptionStatus;
  current_period_start: string;
  current_period_end: string;
  plan?: Plan;
}

export interface AnalyticsSummary {
  total_scans: number;
  total_drafts: number;
  avg_rating: number;
  conversion_rate: number;
  daily_stats: Array<{ date: string; scans: number; drafts: number }>;
  top_keywords: Array<{ word: string; count: number }>;
  top_locations: Array<{ location: string; count: number }>;
  languages: Array<{ lang: string; percentage: number }>;
}

export interface SuperAdminStats {
  total_businesses: number;
  active_users: number;
  total_qr_codes: number;
  total_scans: number;
  total_review_drafts: number;
  total_revenue: number;
  monthly_growth: Array<{ month: string; businesses: number; revenue: number }>;
}
