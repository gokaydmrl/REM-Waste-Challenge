import React from "react";
import "./steps.css";
import { PrevStep } from "./PrevSteps/PrevSteps";
import { CurrentStep } from "./CurrentStep/CurrentStep";
import { NextStep } from "./NextSteps/NextSteps";
export const Steps = React.memo(() => {
  return (
    <div className="dispFlex flexRow stepsMainWrapper">
      <PrevStep />
      <CurrentStep />
      <NextStep />
    </div>
  );
});
