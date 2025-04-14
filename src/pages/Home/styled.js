import styled from "styled-components";
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 8rem 2rem 8rem;
  font-size: 20px;
`;

export const ProfileImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  margin-bottom: 20px;
`;



export const Titulo = styled.div`
  margin-left: 40px;
  text-align: left;
  h1 {
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 10px;
  }
  p {
    color:rgb(98, 106, 107);
  }
  `;

export const Topo = styled.div`
  display: flex;
  justify-content: left;
  

`;

export const Texto = styled.p`
  font-weight: 400;
  width: 90%;
`;


export const Section = styled.div`
  margin-top: 20px;
  p{
    font-weight: 200;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  font-size: 1.2rem;
  margin-top: 5px;
  font-weight: 200;
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const SidebarSection = styled.div`
  margin-bottom: 20px;
`;

export const Redes = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 50px 0 0 0;
`;

export const ContactButton = styled.button`
  background: #2C2C2C;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;