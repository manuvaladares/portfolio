import styled from "styled-components";
import Header from "./Header/page.jsx";

const Main = styled.main`
  margin-bottom: 50px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
