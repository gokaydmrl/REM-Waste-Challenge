import React from "react";
import type { IData } from "../../types/data";

export const YardSkip = React.memo(({ size = 0 }: Pick<IData, "size">) => {
  return <p className="infoText infoHead area">{size} Yard Skip</p>;
});
