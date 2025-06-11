import React from "react";
import type { IData } from "../../types/data";

export const Price = ({
  price_before_vat = 0,
}: Pick<IData, "price_before_vat">) => {
  return <p className="infoHead font-size--large price">{price_before_vat}</p>;
};
