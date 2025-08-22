
import React from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';
import TextBlock from '../../components/ui/TextBlock/TextBlock';


const AboutPage = () => {
  return (
    <MainLayout
      leftContent={
        <>
          <h1><span style={{ fontSize: "1.7rem"}}>Manuella Valadares</span></h1>
          <p><span style={{ fontSize: "1rem", color: "var(--color-cinza)" }}>DESENVOLVEDORA</span></p>
        </>
      }
      rightContent={
        <>
          <TextBlock title="SOBRE MIM"><span style={{ fontSize: "2rem" }}>Sou desenvolvedora front-end apaixonada por criar experiências digitais envolventes e acessíveis.</span></TextBlock>
          <TextBlock title=""><span style={{ fontSize: "2rem" }}>Graduada em Ciência da Computação, com experiência em React, CSS e design responsivo.</span></TextBlock>
        </>
      }   
    />
  );
};

export default AboutPage;