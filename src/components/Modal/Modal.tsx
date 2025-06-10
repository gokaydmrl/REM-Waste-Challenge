import type { Dispatch, SetStateAction } from "react";
import "./modal.css";
import { YardSkip } from "../YardSkip/YardSkip";
import { HirePeriodDays } from "../HirePeriod/HirePeriod";
import { Price } from "../Price/Price";
export const Modal = ({
  hire_period_days,
  price_before_vat,
  size,
  setShowModal,
}: {
  hire_period_days?: number | undefined;
  price_before_vat?: number | undefined;
  size?: number | undefined;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
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
          <div className="dispFlex pd-big flexSpBetween">
            <div>
              <YardSkip size={size} />
              <HirePeriodDays hire_period_days={hire_period_days} />
            </div>
            <Price price_before_vat={price_before_vat} />
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
