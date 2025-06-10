import React from "react";

export const FilterButtons = React.memo(
  ({ children }: { children: React.ReactNode }) => {
    return <div className="dispFlex flexRow gap12 pdBt16"> {children} </div>;
  }
);
