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
            href="https://github.com/manuvaladares/personal-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </ProjectCard>

        <ProjectCard>
          <h3>Stardew Valley terminal game with SQL</h3>
          <p>Terminal game with SQL</p>
          <TagContainer>
            <Tag>PostgreSQL</Tag>
            <Tag>Python</Tag>
            <Tag>MUD</Tag>
          </TagContainer>
          <a
            href="https://github.com/SBD1/2024.2-StardewValley"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </ProjectCard>

        <ProjectCard>
          <h3>Minas de cultura</h3>
          <p>Check cultural expenses of the state of Minas Gerais</p>
          <TagContainer>
            <Tag>Python</Tag>
            <Tag>Web Scraping</Tag>
            <Tag>Next</Tag>
          </TagContainer>
          <a
            href="https://github.com/manuvaladares/2024-1-MinasDeCultura"
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
