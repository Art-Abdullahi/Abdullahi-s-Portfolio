import React, { useEffect, useRef } from "react";

const Humburger = ({ state }) => {
  let menu = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      //close
      menu.style.display = "none";
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      //open
      menu.style.display = "block";
    }
  });

  return (
    <div ref={(el) => (menu = el)} className="humburger-menu">
      <div className="menu-secondary-background-color"></div>
      <div className="menu-layer"></div>
      <div className="contain">
        <div className="wrapper">
          <div className="menu-links">
            <nav>
              <ul>
                <li>Projects</li>
                <li>About Me</li>
                <li>Contact Me</li>
              </ul>
            </nav>
            <div className="info">
              <h3>My Promise</h3>
              <p>
                I promise to work hands on your project and satisfy you cause
                thats my joy.
              </p>
            </div>
            <div className="socials">
              Socials:
              <span>Facebook</span>
              <span>Twitter</span>
              <span>Youtube</span>
              <span>Pintrest</span>
              <span>Medium</span>
              <span>Linkedin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Humburger;
