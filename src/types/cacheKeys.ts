import type { IData } from "./data";

export const KEYS = {
  MAINDATA: "mainData",
  SECOND: "secondData",
  THIRD: "thirdData",
} as const;

export type TCacheKey = keyof typeof KEYS;

export type TCacheValue = (typeof KEYS)[TCacheKey];

export interface ICachedData {
  data: IData[];
  expiresAt: number;
}
