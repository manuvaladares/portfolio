import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Nome = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

export const Section = styled.div`
  margin-top: 20px;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  color: #d3d3d3;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  font-size: 14px;
  margin-top: 5px;
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