import React from "react";
import { Projetos, ProjectsGrid, ProjectCard, SectionTitle, TagContainer, Tag, ProjectImage, ProjectContent } from "./styled";
import foto1 from "../../assets/foto1.jpg";
import foto2 from "../../assets/foto2.png";
import foto3 from "../../assets/foto3.jpg";
import foto4 from "../../assets/foto4.jpg";
import foto5 from "../../assets/foto5.jpg";
import foto6 from "../../assets/foto6.jpg";

const Projects = () => {
  return (
    <Projetos id="projects">
      <SectionTitle style={{ textAlign: "center", marginBottom: "1rem" }}>
        Projects
      </SectionTitle>
      <ProjectsGrid>
        <ProjectCard>
          <ProjectImage src={foto1} alt="Personal Portfolio" />
          <ProjectContent>
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
          </ProjectContent>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={foto2} alt="Stardew Valley terminal game" />
          <ProjectContent>
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
          </ProjectContent>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={foto3} alt="Família do Sítio website" />
          <ProjectContent>
            <h3>Família do Sítio website</h3>
            <p>website of the company Família do Sítio</p>
            <TagContainer>
              <Tag>React</Tag>
              <Tag>Node</Tag>
              <Tag>MongoDB</Tag>
              <Tag>styled-components</Tag>
            </TagContainer>
            <a
              href="https://cafedositio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View website (in production)
            </a>
          </ProjectContent>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={foto4} alt="Minas de cultura" />
          <ProjectContent>
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
          </ProjectContent>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={foto5} alt="99 Graphs" />
          <ProjectContent>
            <h3>99 Graphs</h3>
            <p>Calculate the shortest path between important points in Brasilia using Dijkstra's algorithm on a real graph</p>
            <TagContainer>
              <Tag>Python</Tag>
              <Tag>Streamlit</Tag>
              <Tag>Geopy</Tag>
            </TagContainer>
            <a
              href="https://github.com/manuvaladares/99Grafos"
              target="_blank"
              rel="noopener noreferrer">
              View on GitHub
            </a>
          </ProjectContent>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={foto6} alt="Maze" />
          <ProjectContent>
            <h3>Maze</h3>
            <p>Visualize and compare the performance of BFS (Breadth-First Search) and DFS (Depth-First Search) algorithms in finding a path in a graph</p>
            <TagContainer>
              <Tag>Python</Tag>
              <Tag>Streamlit</Tag>
            </TagContainer>
            <a
              href="https://github.com/manuvaladares/Maze"
              target="_blank"
              rel="noopener noreferrer">
              View on GitHub
            </a>
          </ProjectContent>
        </ProjectCard>
      </ProjectsGrid>
    </Projetos>
  );
};

export default Projects;
