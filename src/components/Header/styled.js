import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  color: #2C2C2C;
  margin-top: 20px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* melhor que 'right' */
  z-index: 1000;
  padding: 0 40px;
`;
