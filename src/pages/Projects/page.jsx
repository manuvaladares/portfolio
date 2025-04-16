import React from "react";
import {Projetos, ProjectsGrid, ProjectCard} from "./styled";


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
    );
}
export default Projects;