import React from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
import Button from '../../components/ui/Button/Button';

const AboutPage = () => {
  return (
    <MainLayout
      leftContent={
        <>
          <h1>About Me</h1>
          <p>Welcome to the about page!</p>
        </>
      }
    />
  );
};

export default AboutPage;