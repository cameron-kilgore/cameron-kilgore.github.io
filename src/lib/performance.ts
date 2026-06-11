// Performance utilities and helpers

/**
 * Debounce function to limit how often a function can run
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function to limit function calls over time
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Intersection Observer wrapper for lazy loading
 */
export function observeElement(
  element: HTMLElement,
  callback: (visible: boolean) => void,
  options?: IntersectionObserverInit
) {
  const observer = new IntersectionObserver(([entry]) => {
    callback(entry.isIntersecting);
  }, options);

  observer.observe(element);
  return observer;
}

/**
 * Report Web Vitals
 */
export function reportWebVitals(metric: any) {
  if (typeof window === "undefined") return;

  const vitalsUrl = "https://api.vitals.vercel-analytics.com/v1/web";

  const body = {
    dsn: process.env.NEXT_PUBLIC_VITALS_DSN,
    id: metric.id,
    page: window.location.pathname,
    href: window.location.href,
    event_name: metric.name,
    value: metric.value.toString(),
    event_callback: metric.callback,
  };

  if (navigator.sendBeacon) {
    navigator.sendBeacon(vitalsUrl, JSON.stringify(body));
  }
}
