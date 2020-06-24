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
    <div className="navigator">
      <Navbar dark>
        <NavbarBrand href="/" className="mr-auto" style={{ color: "#61dafb" }}>
          <h2>Abdullahi</h2>
        </NavbarBrand>
        <NavbarToggler
          onClick={toggleNavbar}
          className="toggler"
          style={{ background: "#61dafb", color: "black" }}
        />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <h4>Projects</h4>
            </NavItem>
            <NavItem>
              <h4>About</h4>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
