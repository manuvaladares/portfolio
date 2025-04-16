import styled from "styled-components";
import Header from "./Header/page.jsx";
import Footer from "./Footer/page.jsx";

const Main = styled.main`
  margin-top: 40px;
  margin-bottom: 50px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
