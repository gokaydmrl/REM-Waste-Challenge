import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import type { AxiosInstance } from "axios";
import { useAxios } from "../hooks/useAxios";

interface AxiosContextType {
  axiosInstance: AxiosInstance;
}

const AxiosContext = createContext<AxiosContextType | undefined>(undefined);

export const AxiosProvider = ({ children }: { children: ReactNode }) => {
  const axiosInstance = useAxios();

  return (
    <AxiosContext.Provider value={{ axiosInstance }}>
      {children}
    </AxiosContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAxiosContext = () => {
  const context = useContext(AxiosContext);
  if (context === undefined) {
    throw new Error("useAxiosContext must be used within an AxiosProvider");
  }
  return context.axiosInstance;
};
