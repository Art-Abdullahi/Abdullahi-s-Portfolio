import React from "react";
import Humburger from "./Humburger";

const Menu = () => {
  return (
    <header>
      <div className="contain">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">ABDULLAHI</div>
            <div className="menu">
              <button>Menu</button>
            </div>
          </div>
        </div>
      </div>
      <Humburger />
    </header>
  );
};

export default Menu;
