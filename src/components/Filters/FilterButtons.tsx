import React from "react";
import { FilterButton } from "./FilterButton";
import { useData } from "../../context/DataContext";

export const FilterButtons = () => {
  const {
    priceFilterAsc,
    handleSetPriceChange,
    handleSetYardSkipChange,
    yardSkipFilterAsc,
  } = useData();
  return (
    <div className="dispFlex flexRow gap12 pdBt16">
      <FilterButton
        type="Price"
        handleFilter={handleSetPriceChange}
        isAsc={priceFilterAsc}
      />
      <FilterButton
        type="Yard Skip"
        handleFilter={handleSetYardSkipChange}
        isAsc={yardSkipFilterAsc}
      />
    </div>
  );
};
