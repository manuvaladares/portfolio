import styled from 'styled-components';

export const ScriptFont = styled.span`
  font-family: "Ballet",cursive;
  font-size: 6rem;
  font-weight: 600;
`;

export const SectionHello = styled.section`
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
    font-size: 1.5rem;
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

export const SectionAbout = styled.section`
  background-color: #f9f9f9;
  margin: 15rem;
  border-radius: 60px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutPhoto = styled.div`
  flex-shrink: 0;

  img {
    max-width: 250px;
    width: 100%;
    border-radius: 12px;
  }
`;

export const AboutText = styled.div`
  flex: 1;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.6;
  }
`;