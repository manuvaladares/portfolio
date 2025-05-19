import styled from 'styled-components';

export const SectionHello = styled.section`
  height: 100vh;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: 4rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
    font-style: italic;
  }

  p {
    font-size: 1.5rem;
    font-weight: 300;
    margin: 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const ContentWrapper = styled.div`
  max-width: 800px;
`;
