import React, { useEffect } from "react";
import "./steps.css";
import { PrevStep } from "./PrevSteps/PrevSteps";
import { CurrentStep } from "./CurrentStep/CurrentStep";
import { NextStep } from "./NextSteps/NextSteps";
export const Steps = React.memo(() => {
  useEffect(() => {
    console.log("STEPS RENDERED");
  });
  return (
    <div className="dispFlex flexRow stepsMainWrapper">
      <PrevStep />
      <CurrentStep />
      <NextStep />
    </div>
  );
});
