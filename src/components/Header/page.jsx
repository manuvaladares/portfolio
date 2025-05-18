import React from "react";
import { HeaderWrapper, StyledLink } from "./styled";

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderWrapper>
      <nav>
        <StyledLink onClick={() => scrollToSection("home")}>
          Início
        </StyledLink>
        <StyledLink onClick={() => scrollToSection("projects")}>
          Projetos
        </StyledLink>
        <StyledLink onClick={() => scrollToSection("about")}>
          Sobre mim
        </StyledLink>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
