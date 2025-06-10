import axios from "axios";
import type { AxiosInstance } from "axios";
import { useMemo } from "react";

export const useAxios = () => {
  const axiosInstance: AxiosInstance = useMemo(() => {
    const instance = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    });

    return instance;
  }, []);

  return axiosInstance;
};
