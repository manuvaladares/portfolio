import React from "react";
import { Container, ProfileImage, Section, SectionTitle, List, ListItem, Sidebar, SidebarSection, ContactButton, Titulo, Topo, Texto } from "./styled";
import foto from "../../assets/foto.jpg";

const Home = () => {
  return (
    <Container>
      <div>
        <Topo>
          <ProfileImage src={foto} alt="Profile" />
          <Titulo>
            <h1>Hi, I’m Manuella! 👋</h1>
            <p>Software Developer | Python | React</p>
          </Titulo>
        </Topo>
        <Texto>
          Pursuing a B.Sc. in Software Engineering at the University of Brasília
          (UnB), researcher in Digital Accessibility and one year of experience
          in software development.
        </Texto>
        <Section>
          <SectionTitle>Programming Languages</SectionTitle>
          <p>Python, C</p>
        </Section>

        <Section>
          <SectionTitle>Web development</SectionTitle>
          <p>HTML5, CSS 3, JavaScript, React, Git, Scrum</p>
        </Section>
      </div>
      <Sidebar>
        <SidebarSection>
          <SectionTitle>Languages</SectionTitle>
          <List>
            <ListItem>🇺🇸 EN Intermediate</ListItem>
            <ListItem>🇧🇷 PT-BR Native Speaker</ListItem>
          </List>
        </SidebarSection>

        <SidebarSection>
          <SectionTitle>Education</SectionTitle>
          <List>
            <ListItem>Software Engineering Bachelors Degree - Universidade de Brasília</ListItem>
          </List>
        </SidebarSection>

        <SidebarSection>
          <SectionTitle>Research publications</SectionTitle>
          <List>
            <ListItem>A Quantitative Study of Publications about Underrepresented Minority ...</ListItem>
          </List>
        </SidebarSection>
        
        <ContactButton>CONTACT ME</ContactButton>
      </Sidebar>
    </Container>
  );
};

export default Home;
