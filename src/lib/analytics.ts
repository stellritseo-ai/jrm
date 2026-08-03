/**
 * Analytics and Conversion Event Tracker for JRM Construction Landscaping Design
 * Supports Google Analytics 4 (gtag), Google Tag Manager (dataLayer), Microsoft Clarity, and Meta Pixel (fbq).
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    clarity?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export type EventCategory = 
  | "Lead Generation"
  | "Phone Click"
  | "Email Click"
  | "Form Submission"
  | "Consultation Request"
  | "Navigation"
  | "Service Engagement";

export interface AnalyticsEvent {
  action: string;
  category: EventCategory;
  label?: string;
  value?: number;
}

/**
 * Track a custom event to Google Analytics, GTM, Clarity, and Meta Pixel
 */
export function trackEvent({ action, category, label, value }: AnalyticsEvent): void {
  if (typeof window === "undefined") return;

  // Google Analytics 4 (gtag.js)
  if (typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }

  // Google Tag Manager (dataLayer)
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: action,
      eventCategory: category,
      eventLabel: label,
      eventValue: value,
    });
  }

  // Microsoft Clarity custom tags
  if (typeof window.clarity === "function") {
    window.clarity("set", action, label || category);
  }

  // Meta Pixel (Facebook)
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", action, {
      category,
      label,
      value,
    });
  }
}

/**
 * Track phone call clicks for conversion optimization
 */
export function trackPhoneClick(source: string = "Header"): void {
  trackEvent({
    action: "phone_call_click",
    category: "Phone Click",
    label: `Call Triggered from: ${source}`,
  });
}

/**
 * Track consultation / quote form submissions
 */
export function trackFormSubmission(formName: string): void {
  trackEvent({
    action: "form_submission",
    category: "Form Submission",
    label: `Form Submitted: ${formName}`,
  });
}

/**
 * Track service page visits
 */
export function trackServiceView(serviceName: string): void {
  trackEvent({
    action: "service_view",
    category: "Service Engagement",
    label: `Service Viewed: ${serviceName}`,
  });
}
