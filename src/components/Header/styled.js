import styled from "styled-components";

const mobile = '(max-width: 768px)';

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

  @media ${mobile} {
    justify-content: center;
    padding: 0 20px;
    margin-top: 10px;
    flex-wrap: wrap;
  }
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

  @media ${mobile} {
    margin: 10px;
    font-size: 0.95rem;
  }
`;
