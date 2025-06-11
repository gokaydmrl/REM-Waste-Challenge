import { useState } from "react";
import type { IData } from "../../types/data";
import "../../App.css";
import { YardSkip } from "../YardSkip/YardSkip";
import { Price } from "../Price/Price";
import { HirePeriodDays } from "../HirePeriod/HirePeriod";
import { Allowances } from "../Allowance/Allowance";
export const Slide = ({ item }: { item: IData }) => {
  const [seeDetail, setSeeDetail] = useState(false);

  return (
    <div style={{ display: "grid" }}>
      <div className="imgWrapper">
        <img className="itemImg" src={item.pic} />
      </div>

      <div className="itemDetails pdBig">
        <div className="dispFlex flexSpBetween">
          <YardSkip size={item.size} />
          <div className="dispFlex flexRow gap12">
            <div style={{ padding: ".2rem" }}>
              <Price price_before_vat={item.price_before_vat} />
            </div>
            <button
              className="seeDetailButton"
              onClick={() => setSeeDetail((prev) => !prev)}
            >
              {!seeDetail ? "➕" : "➖"}
            </button>
          </div>
        </div>
        {seeDetail && (
          <div>
            <HirePeriodDays hire_period_days={item.hire_period_days} />
            <Allowances
              allowance={item.allowed_on_road}
              text={
                item.allowed_on_road ? "Allowed On Road" : "Not Allowed On Road"
              }
            />
            <Allowances
              allowance={item.allows_heavy_waste}
              text={
                item.allows_heavy_waste
                  ? "Allows Heavy Waste"
                  : "Not Allows Heavy Waste"
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};
