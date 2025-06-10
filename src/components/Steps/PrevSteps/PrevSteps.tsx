import React from "react";
import { Header } from "../../Header/Header";
import { StepsParent } from "../StepsParent";
import { getActiveStep } from "../../../helpers/getActiveStep";
import { steps } from "../steps";
import "./prevStep.css";
export const PrevStep = React.memo(() => {
  const activeStep = getActiveStep();
  return (
    <div className="stepWrapper prevStepWrapper" style={{}}>
      <Header size={3} text="&larr; Prev Steps" />
      <StepsParent>
        {steps.slice(0, activeStep).map((item) => {
          return (
            <a key={item} style={{ cursor: "pointer" }}>
              {item}
            </a>
          );
        })}
      </StepsParent>
    </div>
  );
});
