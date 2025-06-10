import React from "react";
import { Header } from "../../Header/Header";
import { StepsParent } from "../StepsParent";
import { steps } from "../stepsData";
import "./prevStep.css";
import { useData } from "../../../context/DataContext";
export const PrevStep = React.memo(() => {
  const { activeStep } = useData();
  return (
    <div className="stepWrapper prevStepWrapper">
      <button>&larr; Go Back</button>
      <Header size={3} text="Prev Steps" />
      <StepsParent>
        {steps.slice(0, activeStep).map((item) => {
          return (
            <a
              className="font-size--small"
              key={item}
              style={{ cursor: "pointer" }}
            >
              {item}
            </a>
          );
        })}
      </StepsParent>
    </div>
  );
});
