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
          Home
        </StyledLink>
        <StyledLink onClick={() => scrollToSection("about")}>
          About
        </StyledLink>
        <StyledLink onClick={() => scrollToSection("projects")}>
          Projects
        </StyledLink>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
