import { createContext, useContext, useState, useCallback } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { useCachedData } from "../hooks/useCachedData";
import type { IData } from "../types/data";
// Define allowed page names

// Define the shape of context
interface DataContextType {
  priceFilterAsc: boolean;
  setPriceFilterAsc: (arg: boolean) => void;
  yardSkipFilterAsc: boolean;
  setYardSkipFilterAsc: (arg: boolean) => void;
  showModal: boolean;
  setShowModal: (arg: boolean) => void;
  selectedItem: Partial<IData> | null;
  setSelectedItem: Dispatch<SetStateAction<Partial<IData> | null>>;
  handleSelect: (item: Partial<IData>) => void;
  handleSetPriceChange: () => void;
  handleSetYardSkipChange: () => void;
  data: IData[];
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const { data, setData } = useCachedData({ cacheKey: "MAINDATA" });
  const [activeStep, setActiveStep] = useState(2);
  const [priceFilterAsc, setPriceFilterAsc] = useState(true);
  const [yardSkipFilterAsc, setYardSkipFilterAsc] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Partial<IData> | null>(null);

  const handleSelect = (item: Partial<IData>) => {
    setSelectedItem({
      hire_period_days: item.hire_period_days,
      price_before_vat: item.price_before_vat,
      size: item.size,
      id: item.id,
    });
    setShowModal(true);
  };

  const filteredDataByPrice = useCallback(() => {
    const dataFilteredByPrice = data.slice().sort((a, b) => {
      return priceFilterAsc
        ? b.price_before_vat! - a.price_before_vat!
        : a.price_before_vat! - b.price_before_vat!;
    });
    setData(dataFilteredByPrice);
  }, [priceFilterAsc, data, setData]);

  const filteredDataByYardSkip = useCallback(() => {
    const dataFilteredByPrice = data.slice().sort((a, b) => {
      return yardSkipFilterAsc ? b.size! - a.size! : a.size! - b.size!;
    });
    setData(dataFilteredByPrice);
  }, [yardSkipFilterAsc, data, setData]);

  const handleSetPriceChange = () => {
    setPriceFilterAsc((prev) => !prev);
    filteredDataByPrice();
  };

  const handleSetYardSkipChange = () => {
    setYardSkipFilterAsc((prev) => !prev);
    filteredDataByYardSkip();
  };

  return (
    <DataContext.Provider
      value={{
        priceFilterAsc,
        setPriceFilterAsc,
        yardSkipFilterAsc,
        setYardSkipFilterAsc,
        showModal,
        setShowModal,
        selectedItem,
        setSelectedItem,
        handleSelect,
        handleSetPriceChange,
        handleSetYardSkipChange,
        data,
        activeStep,
        setActiveStep,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a PageProvider");
  }
  return context;
};
