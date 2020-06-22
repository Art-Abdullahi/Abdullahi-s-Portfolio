import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div
      style={{
        color: "aqua",
        position: "absolute",
        width: "100%",
        fontFamily: "Piedra",
        backgroundColor: "transparent",
      }}
    >
      <Navbar dark>
        <NavbarBrand href="/" className="mr-auto" style={{ color: "aqua" }}>
          <h3>Abdullahi</h3>
        </NavbarBrand>
        <NavbarToggler
          onClick={toggleNavbar}
          className="mr-2"
          style={{ background: "aqua", color: "black" }}
        />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <h1>Projects</h1>
            </NavItem>
            <NavItem>
              <h1>About</h1>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
