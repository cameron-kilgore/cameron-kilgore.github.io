// Accessibility utilities

/**
 * Generate unique IDs for accessibility relationships
 */
export function generateId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Announce updates to screen readers
 */
export function announce(message: string, priority: "polite" | "assertive" = "polite") {
  if (typeof window === "undefined") return;

  const announcement = document.createElement("div");
  announcement.setAttribute("role", "status");
  announcement.setAttribute("aria-live", priority);
  announcement.setAttribute("aria-atomic", "true");
  announcement.className = "sr-only";
  announcement.textContent = message;

  document.body.appendChild(announcement);

  setTimeout(() => {
    announcement.remove();
  }, 1000);
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Check if user prefers dark color scheme
 */
export function prefersDarkMode(): boolean {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

/**
 * Get keyboard event modifier state
 */
export function getModifierState(event: KeyboardEvent): {
  ctrl: boolean;
  shift: boolean;
  alt: boolean;
  meta: boolean;
} {
  return {
    ctrl: event.ctrlKey || event.metaKey,
    shift: event.shiftKey,
    alt: event.altKey,
    meta: event.metaKey,
  };
}
