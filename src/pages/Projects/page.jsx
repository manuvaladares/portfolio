import React from "react";
import { Projetos, ProjectsGrid, ProjectCard, SectionTitle, TagContainer, Tag } from "./styled";

const Projects = () => {
  return (
    <Projetos>
      <SectionTitle style={{ textAlign: "center", marginBottom: "1rem" }}>
        Projects
      </SectionTitle>
      <ProjectsGrid>
        <ProjectCard>
          <h3>Personal Portfolio</h3>
          <p>Built with React and styled-components</p>
          <TagContainer>
            <Tag>React</Tag>
            <Tag>styled-components</Tag>
          </TagContainer>
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
          <TagContainer>
            <Tag>React</Tag>
            <Tag>PDF.js</Tag>
            <Tag>Acessibilidade</Tag>
          </TagContainer>
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
          <TagContainer>
            <Tag>JavaScript</Tag>
            <Tag>WCAG</Tag>
          </TagContainer>
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
  );
};

export default Projects;
