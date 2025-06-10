import React from "react";
import "./nav.css";
import logo from "../../assets/logo.jpg";
export const Nav = React.memo(() => {
  return (
    <div className="dispFlex flexSpBetween pdBt12">
      <a href="">
        <img src={logo} alt="REM WASTE LOGO" className="logo" />
      </a>
      <a className="font-size--large black" href="">
        ☰
      </a>
    </div>
  );
});
