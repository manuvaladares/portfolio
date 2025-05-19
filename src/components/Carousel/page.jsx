import React, { useState, useEffect, useRef } from 'react';
import {
  CarouselWrapper,
  CarouselTrack,
  Photo,
  PrevButton,
  NextButton,
  ArrowSvg,
} from './styled';

const PhotoCarousel = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const total = photos.length;

  // Move to next photo
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  // Move to previous photo
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Set up autoplay
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [total]);

  // Reset autoplay on manual click
  const resetAutoplay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  return (
    <CarouselWrapper>
      <CarouselTrack
        style={{ transform: `translateX(-${currentIndex * (100)}vw)` }}
      >
        {photos.map((src, i) => (
          <Photo key={i} src={src} alt={`Photo ${i + 1}`} draggable={false} />
        ))}
      </CarouselTrack>

      <PrevButton
        aria-label="Previous slide"
        onClick={() => {
          prevSlide();
          resetAutoplay();
        }}
      >
        <ArrowSvg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </ArrowSvg>
      </PrevButton>

      <NextButton
        aria-label="Next slide"
        onClick={() => {
          nextSlide();
          resetAutoplay();
        }}
      >
        <ArrowSvg viewBox="0 0 24 24" aria-hidden="true" style={{transform: 'rotate(180deg)'}}>
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </ArrowSvg>
      </NextButton>
    </CarouselWrapper>
  );
};

export default PhotoCarousel;
