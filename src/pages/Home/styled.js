import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 8rem;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 3px solid white; 
`;



export const Titulo = styled.div`
  margin-left: 20px;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: 600;
  }
  p {
    font-size: 1.5rem;
    color: #B3B3B3;
  }
  `;

export const Topo = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: left;

`;

export const Texto = styled.p`
  font-weight: 200;
  font-size: 1.5rem;
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
  font-size: 2rem;
  font-weight: 500;
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
`;

export const SidebarSection = styled.div`
  margin-bottom: 20px;
`;


export const ContactButton = styled.button`
  background: linear-gradient(90deg, #6a5acd, #8a2be2);
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