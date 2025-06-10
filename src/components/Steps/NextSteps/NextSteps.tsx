import React from "react";
import { Header } from "../../Header/Header";
import { StepsParent } from "../StepsParent";
import "./nextStep.css";
import { getActiveStep } from "../../../helpers/getActiveStep";
import { steps } from "../steps";
export const NextStep = React.memo(() => {
  const activeStep = getActiveStep();
  return (
    <div className="stepWrapper nextStepWrapper">
      <Header size={3} text="Next Steps &rarr;" />
      <StepsParent>
        {steps.slice(activeStep + 1, steps.length).map((item) => {
          return (
            <a key={item} className="nextStep font-size--small">
              {item}
            </a>
          );
        })}
      </StepsParent>
    </div>
  );
});
