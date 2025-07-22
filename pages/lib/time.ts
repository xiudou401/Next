// lib/time.ts

export function getCurrentTime(): string {
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, '0');

  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());

  return `${hours}:${minutes}:${seconds}`;
}
