// Small className joiner, filters out falsy values. Kept local
// instead of pulling in a dependency just for this.
export function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}
