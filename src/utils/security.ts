/**
 * Frontend Security & Anti-Tampering Utility System
 * Protects forms against XSS injections, script execution attacks, and data manipulation.
 */

// Sanitize user inputs by escaping dangerous HTML characters to prevent XSS
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
}

// Validate email format with strict regex
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Deep freeze object to prevent runtime client tampering
export function deepFreeze<T extends object>(obj: T): T {
  Object.keys(obj).forEach((prop) => {
    const val = (obj as Record<string, unknown>)[prop];
    if (val && typeof val === 'object' && !Object.isFrozen(val)) {
      deepFreeze(val as object);
    }
  });
  return Object.freeze(obj);
}
