import type { IData } from "./data";

export const KEYS = {
  MAINDATA: "mainData",
  SECOND: "secondData",
  THIRD: "thirdData",
} as const;

// Type for keys (e.g., "MAINDATA" | "SECOND" | "THIRD")
export type TCacheKey = keyof typeof KEYS;

// Type for values (e.g., "mainData" | "secondData" | "thirdData")
export type TCacheValue = (typeof KEYS)[TCacheKey];

export interface ICachedData {
  data: IData[];
  expiresAt: number;
}
