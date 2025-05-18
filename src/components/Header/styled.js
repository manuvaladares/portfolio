import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 1000;
  padding: 0 40px;
`;

export const StyledLink = styled.span`
  margin: 0 20px;
  cursor: pointer;
  color: #2c2c2c;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #e75480;
  }
`;
