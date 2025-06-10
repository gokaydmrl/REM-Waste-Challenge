import React from "react";
import type { IData } from "../../types/data";

export const YardSkip = React.memo(({ size = 0 }: Pick<IData, "size">) => {
  return <p className="font-size--md infoHead area">{size} Yard Skip</p>;
});
