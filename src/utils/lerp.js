export function lerp(initial, target, progress) {
  return initial * (1 - progress) + target * progress;
}
