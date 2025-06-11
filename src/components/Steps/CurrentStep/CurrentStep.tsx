import React from "react";
import { Header } from "../../Header/Header";
import { StepsParent } from "../StepsParent";
import "./currentStep.css";
import { steps } from "../stepsData";
import { useData } from "../../../context/DataContext";
export const CurrentStep = () => {
  const { activeStep } = useData();
  return (
    <div className="stepWrapper currentStep">
      <Header size={3} text="Current Step" />
      <StepsParent>
        <a className="font-size--small">{steps[activeStep]}</a>
      </StepsParent>
    </div>
  );
};
