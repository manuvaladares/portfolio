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
  max-width: 800px;
  z-index: 2;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 400;
  }

  p {
    text-align: justify;
    margin-bottom: 1rem;
  }
`;

export const PhotoLeftup = styled.img`
  position: absolute;
  top: -40px;
  left: -400px;
  width: 300px;
  transform: rotate(-12deg);
  border: 1px solid #ddd;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  &:hover {
    transform: rotate(0deg) scale(1.1);
    transition: transform 0.4s ease;
}

`;

export const PhotoRightdown = styled.img`
  position: absolute;
  bottom: -40px;
  right: -400px;
  width: 300px;
  transform: rotate(-12deg);
  border: 1px solid #ddd;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  &:hover {
    transform: rotate(0deg) scale(1.1);
    transition: transform 0.4s ease;
`;

export const PhotoLeftdown = styled.img`
  position: absolute;
  bottom: -10px;
  left: -400px;
  width: 400px;
  transform: rotate(10deg);
  border: 1px solid #ddd;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  &:hover {
    transform: rotate(0deg) scale(1.1);
    transition: transform 0.4s ease;
}

`;

export const PhotoRightup = styled.img`
  position: absolute;
  top: -40px;
  right: -400px;
  width: 300px;
  transform: rotate(10deg);
  border: 1px solid #ddd;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  &:hover {
    transform: rotate(0deg) scale(1.1);
    transition: transform 0.4s ease;
`;