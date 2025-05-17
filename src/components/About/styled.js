import styled from 'styled-components';

export const SectionAbout = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem auto;
  max-width: 900px;
`;

export const AboutText = styled.div`
  max-width: 850px;
  z-index: 2;
  
  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 400;
    font-family: 'EB Garamond', sans-serif;
  }

  p {
    font-size: 1.125rem;
    text-align: justify;
    margin-bottom: 1rem;
  }
`;

export const PhotoLeft = styled.img`
  position: absolute;
  top: -40px;
  left: -500px;
  width: 400px;
  transform: rotate(-12deg);
  border: 1px solid #ddd;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  &:hover {
    transform: rotate(0deg) scale(1.1);
    transition: transform 0.4s ease;
}

`;

export const PhotoRight = styled.img`
  position: absolute;
  bottom: -40px;
  right: -500px;
  width: 400px;
  transform: rotate(10deg);
  border: 1px solid #ddd;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  &:hover {
    transform: rotate(0deg) scale(1.1);
    transition: transform 0.4s ease;
`;