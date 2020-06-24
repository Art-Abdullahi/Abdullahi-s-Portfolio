import React, { useState } from "react";
import Humburger from "./Humburger";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Menu = () => {
  const [state, setstate] = useState({
    intial: false,
    clicked: null,
    menuName: "Menu",
  });

  const [disabled, setdisabled] = useState(false);
  const handleMenu = () => {
    disableMenu();
    if (state.intial === false) {
      setstate({
        intial: null,
        clicked: true,
        menuName: "close",
      });
    } else if (state.clicked === true) {
      setstate({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setstate({
        clicked: !state.clicked,
        menuName: "close",
      });
    }
  };

  //will determine if menu is disabled
  const disableMenu = () => {
    setdisabled(!disabled);
    setTimeout(() => {
      setdisabled(false);
    }, 1200);
  };
  return (
    <header>
      <div className="contain">
        <div className="wrapper">
          <div className="inner-header">
            <div className={state.clicked ? "logo-active" : "logo"}>
              ABDULLAHI
            </div>
            <div className="menu">
              <button className="btn" disabled={disabled} onClick={handleMenu}>
                {state.clicked ? (
                  <GrClose style={{ color: "black", fontSize: "3rem" }} />
                ) : (
                  <GiHamburgerMenu
                    style={{ color: "#61dafb", fontSize: "3rem" }}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Humburger state={state} />
    </header>
  );
};

export default Menu;
