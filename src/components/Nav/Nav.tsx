import React, { useEffect } from "react";
import "./nav.css";
export const Nav = React.memo(() => {
  useEffect(() => {
    console.log("NAV RENDERED");
  });
  return (
    <div className="navWrapper dispFlex flexSpBetween pdBt12">
      <a href="">HO</a>
      <a href="">MENU</a>
    </div>
  );
});
