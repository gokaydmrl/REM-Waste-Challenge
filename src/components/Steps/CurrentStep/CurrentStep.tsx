import React from "react";
import { Header } from "../../Header/Header";
import { StepsParent } from "../StepsParent";
import "./currentStep.css";
import { steps } from "../steps";
import { getActiveStep } from "../../../helpers/getActiveStep";
export const CurrentStep = React.memo(() => {
  const activeStep = getActiveStep();
  return (
    <div className="stepWrapper currentStep">
      <Header size={3} text="Current Step" />
      <StepsParent>
        <a className="font-size--small">{steps[activeStep]}</a>
      </StepsParent>
    </div>
  );
});
