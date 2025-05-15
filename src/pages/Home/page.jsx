import React from 'react';
import {
  Section,
  ContentWrapper,
  ScriptFont,
} from './styled';

const Home = () => {
  return (
    <>
      <Section>
        <ContentWrapper>
          <h2>Hello, I'm <ScriptFont>Manuella</ScriptFont>.</h2>
          <p>I'm a Software Engeneer from Brasil.</p>
        </ContentWrapper>
      </Section>

      <Section>
        <ContentWrapper>
          <h2>Sobre mim</h2>
          <p>
            Sou desenvolvedora de software, apaixonada por acessibilidade,
            design e crochê. Atualmente estudo Engenharia de Software na UnB.
          </p>
        </ContentWrapper>
      </Section>

      {/* Adicione outras sections aqui, como Projetos, Contato, etc. */}
    </>
  );
};

export default Home;
