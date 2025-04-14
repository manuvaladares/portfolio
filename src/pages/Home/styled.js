import styled from "styled-components";
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 8rem;
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
    font-size: 3rem;
    margin-bottom: 10px;
  }
  p {
    font-size: 1.5rem;
    color:rgb(98, 106, 107);
  }
  `;

export const Topo = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: left;
  

`;

export const Texto = styled.p`
  font-weight: 400;
  font-size: 1.3rem;
  width: 90%;
`;


export const Section = styled.div`
  margin-top: 20px;
  p{
    font-size: 1.5rem;
    font-weight: 200;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  font-size: 1.5rem;
  margin-top: 5px;
  font-weight: 200;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 350px;
`;

export const SidebarSection = styled.div`
  margin-bottom: 20px;
`;


export const ContactButton = styled.button`
  background: #2C2C2C;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;