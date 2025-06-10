import "./modal.css";
import { YardSkip } from "../YardSkip/YardSkip";
import { HirePeriodDays } from "../HirePeriod/HirePeriod";
import { Price } from "../Price/Price";
import { useData } from "../../context/DataContext";
export const Modal = () => {
  const { setShowModal, selectedItem } = useData();

  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-body">
            <p>
              Imagery and information shown throughout this website may not
              reflect the exact shape or size specification, colours may vary,
              options and/or accessories may be featured at additional cost.
            </p>
          </div>
          <div className="dispFlex pdBig flexSpBetween">
            <div>
              <YardSkip size={selectedItem?.size} />
              <HirePeriodDays
                hire_period_days={selectedItem?.hire_period_days}
              />
            </div>
            <Price price_before_vat={selectedItem?.price_before_vat} />
          </div>
          <div className="modal-footer">
            <button
              onClick={() => setShowModal(false)}
              className="modalBackButton"
            >
              Back
            </button>
            <button className="modalContinueButton">Continue</button>
          </div>
        </div>
      </div>
    </>
  );
};
