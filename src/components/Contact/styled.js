import styled from 'styled-components';

export const Section = styled.section`
  height: 30vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  scroll-snap-align: start;
  h1{
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 0;
    font-style: italic;
  }

  p{
    font-size: 1rem;
    font-weight: 300;
    margin-top: 0;
    text-align: center;
    


  }
  @media (max-width: 768px) {
    h1{
      font-size: 3rem;
    }
    p{
      font-size: 1.2rem;
    }
  }
  @media (max-width: 480px) {
    h1{
      font-size: 2.5rem;
    }
    p{
      font-size: 1rem;
    }
  }
`;



export const SocialLinks = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const SocialLink = styled.a`
  color: #2c2c2c;
  font-size: 2.4rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;

  svg {
    width: 32px;
    height: 32px;
    fill: currentColor;
  }
`;

