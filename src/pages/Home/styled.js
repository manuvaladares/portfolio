import styled, {keyframes} from "styled-components";
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';

// Defina a animação de chacoalhar
const shakeAnimation = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(15deg); }
  50% { transform: rotate(-15deg); }
  75% { transform: rotate(10deg); }
  100% { transform: rotate(0deg); }
`;

// Estilize a imagem da mão com a animação no hover
export const HandImage = styled.img`
  width: 40px;
  margin-right: 8px;

  &:hover {
    animation: ${shakeAnimation} 0.5s ease-in-out; /* Aplica a animação ao passar o mouse */
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 2.5rem 4rem 2.5rem 8rem;
  font-size: 20px;

  @media (max-width: 1020px) {
    flex-direction: column;
    margin: 3rem ;
    padding-right: 0;
  }

  @media (max-width: 768px) {
    margin: 2rem ;
    font-size: 18px;
    padding-right: 0;
  }
`;

export const ProfileImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

export const Titulo = styled.div`
  margin-left: 40px;
  text-align: left;

  h1 {
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 36px;
    }

    @media (max-width: 480px) {
      font-size: 28px;
    }
  }

  p {
    color: rgb(98, 106, 107);
    font-size: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

export const Topo = styled.div`
  display: flex;
  justify-content: left;

  @media (max-width: 700px) {
    flex-direction: column;
    margin: 3rem 2rem;
    align-items: center;
  }
`;

export const Texto = styled.p`
  font-weight: 400;
  width: 90%;
  text-align: justify;


  @media (max-width: 1200px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Section = styled.div`

  p {
    font-weight: 200;

    @media (max-width: 768px) {
    }
  }
`;

export const SectionTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin-top: 20px;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  font-size: 1.2rem;
  margin-top: 5px;
  font-weight: 200;
  a {
    color: inherit;
    text-decoration: underline;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;

  @media (max-width: 1020px) {
    width: 100%;
  }
`;

export const Redes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0 20px 0;

  a {
    margin: 0 10px;

    img {
      width: 40px;

      @media (max-width: 768px) {
        width: 30px;
      }

      @media (max-width: 480px) {
        width: 25px;
      }
    }
  }
`;

export const Projetos = styled.section`
  margin: 6rem 4rem 2.5rem 8rem;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1000px;
  margin: 20px auto;
`;

export const ProjectCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  text-align: left;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    margin-top: 0;
    font-size: 1.2rem;
  }

  a {
    color: #2C2C2C;
    text-decoration: underline;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;


export const ContactButton = styled.button`
  background: #2C2C2C;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  margin-bootom: 50px;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
`;