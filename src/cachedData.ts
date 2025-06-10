import type { ICachedData, TCacheKey } from "./types/cacheKeys";

export const caches: Record<TCacheKey, ICachedData> = {
  MAINDATA: { data: [], expiresAt: Date.now() + 10 * 60 * 100 },
  SECOND: { data: [], expiresAt: Date.now() + 10 * 60 * 100 },
  THIRD: { data: [], expiresAt: Date.now() + 10 * 60 * 100 },
};
