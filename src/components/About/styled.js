// styled.js
import styled from 'styled-components';

const mobile = '(max-width: 768px)';
const tablet = '(max-width: 1024px)';

export const SectionAbout = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem auto;
  max-width: 900px;
  padding: 1rem;

  @media ${mobile} {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

export const AboutText = styled.div`
  max-width: 800px;
  z-index: 2;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 400;
    text-align: center;

    @media ${mobile} {
      font-size: 1.5rem;

    }
  }

  p {
    text-align: justify;
    margin-bottom: 1rem;
    font-size: 1rem;

    @media ${mobile} {
      font-size: 0.95rem;
    }
  }
`;

const sharedImageStyles = `
  position: absolute;
  width: 300px;
  border: 1px solid #ddd;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  transition: transform 0.4s ease;

  &:hover {
    transform: rotate(0deg) scale(1.1);
  }

  @media ${mobile} {
    display: none;
  }

  @media ${tablet} {
    display: none;
  }
`;

export const PhotoLeftup = styled.img`
  ${sharedImageStyles}
  top: -40px;
  left: -400px;
  transform: rotate(-12deg);
`;

export const PhotoLeftdown = styled.img`
  ${sharedImageStyles}
  bottom: -10px;
  left: -400px;
  width: 400px;
  transform: rotate(10deg);
`;

export const PhotoRightup = styled.img`
  ${sharedImageStyles}
  top: -40px;
  right: -400px;
  transform: rotate(10deg);
`;

export const PhotoRightdown = styled.img`
  ${sharedImageStyles}
  bottom: -40px;
  right: -400px;
  transform: rotate(-12deg);
`;
