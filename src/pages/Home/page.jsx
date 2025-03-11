import React from "react";
import { Container, ProfileImage, Nome, Section, SectionTitle, List, ListItem, Sidebar, SidebarSection, ContactButton } from "./styled";
import foto from "../../assets/foto.jpg";

const Home = () => {
  return (
    <Container>
      <div>
        <ProfileImage src={foto} alt="Profile" />
        <Nome>Hi, I’m Manuella! 👋</Nome>
        <p>Software Developer | Python | React</p>
        <p>
          Pursuing a B.Sc. in Software Engineering at the University of Brasília
          (UnB), researcher in Digital Accessibility and one year of experience
          in software development.
        </p>
        <Section>
          <SectionTitle>Programming Languages</SectionTitle>
          <List>
            <ListItem>Python</ListItem>
            <ListItem>C</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Web development</SectionTitle>
          <List>
            <ListItem>HTML5</ListItem>
            <ListItem>CSS3</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>React</ListItem>
            <ListItem>Git</ListItem>
            <ListItem>Scrum</ListItem>
          </List>
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
