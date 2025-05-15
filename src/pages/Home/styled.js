import styled from 'styled-components';

export const ScriptFont = styled.span`
  font-family: "Ballet", cursive;
  font-size: 6rem;
  font-weight: 600;
`;

export const Section = styled.section`
  height: 100vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  h2{
    font-size: 4rem;
    font-weight: 400;
    margin: 0;
  }

  p{
    font-size: 1.2rem;
    font-weight: 300;
    margin: 0;
  }
  @media (max-width: 768px) {
    h2{
      font-size: 3rem;
    }
    p{
      font-size: 1.2rem;
    }
  }
  @media (max-width: 480px) {
    h2{
      font-size: 2.5rem;
    }
    p{
      font-size: 1rem;
    }
  }

`;

export const ContentWrapper = styled.div`
  max-width: 800px;
  text-align: center;
`;
