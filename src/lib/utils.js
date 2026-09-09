// Utility helper for conditional class merging
export function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}
