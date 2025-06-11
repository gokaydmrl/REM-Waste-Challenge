import React from "react";
import "./hirePeriod.css";
import type { IData } from "../../types/data";

export const HirePeriodDays = ({
  hire_period_days = 0,
}: Pick<IData, "hire_period_days">) => {
  return (
    <p className="infoText infoHead period">
      {hire_period_days} Hire Period Days
    </p>
  );
};
