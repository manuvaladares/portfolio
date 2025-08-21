import React from 'react';

import MainLayout from '../../components/MainLayout/MainLayout';
import Navigation from '../../components/navigation/navigation';
import Button from '../../components/ui/Button/Button';


const AboutPage = () => {
  return (
    <MainLayout
      leftContent={
        <>
          <h1>About Me</h1>
          <p>Welcome to the about page!</p>
          <Button onClick={() => alert('Você clicou no botão!')}>Clique aqui</Button>
        </>
      }
      rightContent={<Navigation />}
    />
  );
};

export default AboutPage;