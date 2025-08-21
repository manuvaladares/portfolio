import React from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
import Navigation from '../../components/navigation/navigation';


const AboutPage = () => {
  return (
    <MainLayout
      leftContent={
        <>
          <h1>About Me</h1>
          <p>Welcome to the about page!</p>
        </>
      }
      rightContent={<Navigation />}
    />
  );
};

export default AboutPage;