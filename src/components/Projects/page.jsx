import React from "react";
import { Projetos, ProjectsGrid, ProjectCard, SectionTitle, TagContainer, Tag, ProjectImage, ProjectContent } from "./styled";
import portfolio from "../../assets/projetos/portfolio.png";
import stardew from "../../assets/projetos/stardew.jpeg";
import cafe from "../../assets/projetos/cafe.png";
import laboratorio from "../../assets/projetos/laboratorio.png";
import drums from "../../assets/projetos/drums.png";
import maze from "../../assets/projetos/maze.png";

const Projects = () => {
  return (
    <Projetos id="projects">
      <SectionTitle style={{ textAlign: "center", marginBottom: "1rem" }}>
        Projects
      </SectionTitle>
      <ProjectsGrid>
        <ProjectCard>
          <ProjectImage src={portfolio} alt="Personal Portfolio" />
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
          <ProjectImage src={stardew} alt="Stardew Valley terminal game" />
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
          <ProjectImage src={cafe} alt="Família do Sítio website" />
          <ProjectContent>
            <h3>Família do Sítio website</h3>
            <p>Website of the company Família do Sítio</p>
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
          <ProjectImage src={laboratorio} alt="Genetic Laboratory" />
          <ProjectContent>
            <h3>Genetic Laboratory</h3>
            <p>Uses the Needleman-Wunsch algorithm to perform alignment between a DNA sequence and a mutation proposed by the user in a creature.</p>
            <TagContainer>
              <Tag>JavaScript</Tag>
              <Tag>CSS</Tag>
              <Tag>HTML</Tag>
            </TagContainer>
            <a
              href="https://github.com/manuvaladares/lab"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </ProjectContent>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src={drums} alt="drum game" />
          <ProjectContent>
            <h3>Online Drum Kit</h3>
            <p>A simple virtual drum kit built with HTML, CSS, and JavaScript that allows users to play drum sounds by clicking buttons or using keyboard interactions.</p>
            <TagContainer>
              <Tag>JavaScript</Tag>
              <Tag>CSS</Tag>
              <Tag>HTML</Tag>
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
          <ProjectImage src={maze} alt="Maze" />
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
