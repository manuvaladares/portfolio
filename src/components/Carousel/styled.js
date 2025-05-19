import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  padding: 0 20px; /* espaço nas laterais */
  box-sizing: border-box;

  @media (min-width: 1025px) {
    display: none;
  }
`;

export const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  will-change: transform;
`;

export const Photo = styled.img`
  flex: 0 0 auto;
  width: 90vw; /* quase toda a largura da viewport menos as laterais */
  max-width: 500px;
  height: 300px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.25);
  user-select: none;
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.9);
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255,255,255,1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #3b82f6;
  }
`;

export const PrevButton = styled(ArrowButton)`
  left: 12px;
`;

export const NextButton = styled(ArrowButton)`
  right: 12px;
`;

export const ArrowSvg = styled.svg`
  width: 24px;
  height: 24px;
  fill: #333;
`;
