import React from "react";
import { HeaderWrapper } from "./styled";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderWrapper>
      <nav>
        <Link to="/" style={{ textDecoration: "none", color: "inherit", marginLeft: "20px" }}>
          Home
        </Link>
        <Link to="/projects" style={{ textDecoration: "none", color: "inherit", marginLeft: "20px" }}>
          Projetos
        </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "inherit", marginLeft: "20px" }}>
          Sobre mim
        </Link>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
