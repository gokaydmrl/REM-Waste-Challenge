import { caches } from "../cachedData";
import type { TCacheKey } from "../types/cacheKeys";
export function isCacheExpired(key: TCacheKey): boolean {
  const expiresAt = caches[key].expiresAt;
  return Date.now() < expiresAt;
}
