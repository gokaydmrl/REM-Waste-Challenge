import { Header } from "../../Header/Header";
import { StepsParent } from "../StepsParent";
import "./nextStep.css";
import { steps } from "../stepsData";
import { useData } from "../../../context/DataContext";
export const NextStep = () => {
  const { setShowModal, selectedItem, activeStep } = useData();
  return (
    <div className="stepWrapper nextStepWrapper ">
      <button
        className="-font-size--small"
        onClick={() => setShowModal(true)}
        disabled={!selectedItem}
      >
        Continue &rarr;
      </button>
      <Header size={3} text="Next Steps" />
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
};
