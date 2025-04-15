import React from "react";
import { Container, HandImage, ProfileImage, Projetos, ProjectsGrid, ProjectCard, Section, SectionTitle, List, ListItem, Sidebar, Redes, ContactButton, Titulo, Topo, Texto } from "./styled";
import foto from "../../assets/foto.jpeg";
import hand from "../../assets/hand.png";
import school from "../../assets/school.png";
import lattes from "../../assets/lattes.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

const Home = () => {
  return (
    <>
    <Container>
      <div>
        <Topo>
          <ProfileImage src={foto} alt="Profile" />
          <Titulo>
            <h1>Hi, I’m Manuella! <HandImage src={hand} alt="hand" /></h1>
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
          <p>HTML5, CSS3, JavaScript, React, Git</p>
        </Section>
      </div>
      <Sidebar>

          <SectionTitle>Languages</SectionTitle>
          <List>
            <ListItem>🇺🇸 EN Intermediate</ListItem>
            <ListItem>🇧🇷 PT-BR Native Speaker</ListItem>
          </List>



          <SectionTitle>Education</SectionTitle>
          <List>
            <ListItem>Software Engineering Bachelors Degree - Universidade de Brasília</ListItem>
          </List>



          <SectionTitle>Research publications</SectionTitle>
          <List>
            <ListItem>
              <a 
                href="https://ieeexplore.ieee.org/document/10893151/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                A Quantitative Study of Publications about Underrepresented Minority ...
              </a>
            </ListItem>
          </List>
          <Redes>
            <a href="https://www.linkedin.com/in/manuella-valadares" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" style={{ width: "50px", marginRight: "10px" }} />
            </a>
            <a href="https://github.com/manuvaladares" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" style={{ width: "50px", marginRight: "10px" }} />
            </a>
            <a href="https://lattes.cnpq.br/9815810102046557" target="_blank" rel="noopener noreferrer">
              <img src={lattes} alt="Lattes" style={{ width: "50px" }} />
            </a>
          </Redes>
        
        <ContactButton onClick={() => window.location.href = "mailto:manuella.valadares@hotmail.com"}>CONTACT ME</ContactButton>

      </Sidebar>
    </Container>
    <Projetos>
      <SectionTitle style={{ textAlign: "center", marginBottom: "1rem" }}>
        Projects
      </SectionTitle>
      <ProjectsGrid>
        <ProjectCard>
          <h3>Personal Portfolio</h3>
          <p>Built with React and styled-components</p>
          <a
            href="https://github.com/manuvaladares/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </ProjectCard>
        <ProjectCard>
          <h3>PDF Reader (Accessible)</h3>
          <p>React + PDF.js reader with screen reader support</p>
          <a
            href="https://github.com/manuvaladares/pdf-reader"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </ProjectCard>
        <ProjectCard>
          <h3>Accessibility Checker</h3>
          <p>Tool to validate HTML against WCAG rules</p>
          <a
            href="https://github.com/manuvaladares/accessibility-checker"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </ProjectCard>
      </ProjectsGrid>
    </Projetos>
    </>
  );
};

export default Home;
