import styled from 'styled-components';

export const Projetos = styled.section`
  margin: 6rem 4rem 2.5rem 8rem;

  @media (max-width: 1024px) {
    margin: 4rem 2rem;
  }

  @media (max-width: 768px) {
    margin: 3rem 1rem;
  }

  @media (max-width: 480px) {
    margin: 2rem 1rem;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin-top: 20px;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center; /* Centraliza o título em telas menores */
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 20px auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Uma coluna em telas muito pequenas */
    gap: 10px;
  }
`;

export const ProjectCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    margin-top: 0;
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  a {
    color: #2C2C2C;
    text-decoration: underline;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;