import { useEffect, useState } from "react";
import type { IData } from "../../types/data";
import React from "react";
import "../../App.css";
import { YardSkip } from "../YardSkip/YardSkip";
import { Price } from "../Price/Price";
export const Slide = React.memo(({ item }: { item: IData }) => {
  const [seeDetail, setSeeDetail] = useState(false);

  useEffect(() => {
    console.log("SLIDE RENDERED");
  }, []);

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
            <p className="infoText infoHead hire">
              {item.hire_period_days} of Hire Period
            </p>
            <p className="infoText infoHead allowance">
              {item.allowed_on_road
                ? "Allowed on road"
                : "🚫 It is not allowed on road"}{" "}
            </p>
            <p className="infoText infoHead allowance">
              {" "}
              {item.allows_heavy_waste
                ? "allows heavy waste"
                : "🚫 not allow heavy waste"}{" "}
            </p>
          </div>
        )}
      </div>
    </div>
  );
});
