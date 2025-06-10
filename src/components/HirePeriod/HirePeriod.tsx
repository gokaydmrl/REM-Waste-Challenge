import React from "react";
import type { IData } from "../../types/data";

export const HirePeriodDays = React.memo(
  ({ hire_period_days = 0 }: Pick<IData, "hire_period_days">) => {
    return (
      <p className="infoText infoHead yard">
        {hire_period_days} Hire Period Days
      </p>
    );
  }
);
