import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Navigation = () => {
  return (
    <div className="mb-3">
      <Navbar dark color="dark">
        <NavbarBrand href="/" className="container">
          Restaurant App
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Navigation;
