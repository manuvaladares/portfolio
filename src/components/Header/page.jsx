import React from "react";
import { HeaderWrapper } from "./styled";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Manuella Valadares</h1>
      <nav>
        <Link
          to="/Projects"
          style={{ marginLeft: "20px", textDecoration: "none", color: "inherit" }}
        >
          Projects
        </Link>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;

