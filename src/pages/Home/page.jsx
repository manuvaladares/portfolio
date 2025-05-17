import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Projects from '../../components/Projects/page.jsx';
import {
  SectionHello,
  SectionAbout, AboutContainer, AboutPhoto, AboutText,
  ContentWrapper,
  ScriptFont
} from './styled';

const Home = () => {
  return (
    <>
      <SectionHello>
        <ContentWrapper>
          <h2>Hello, I'm <ScriptFont>Manuella</ScriptFont>.</h2>
          <p>
            I'm a{' '}
            <span aria-hidden="true">
              <Typewriter
                words={['software engineer.', 'researcher.', 'web developer.']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={70}
                delaySpeed={2000}
              />
            </span>
          </p>
        </ContentWrapper>
      </SectionHello>

      <SectionAbout>
        <ContentWrapper>
          <AboutContainer>
            <AboutPhoto>
              <img src="/caminho/para/foto.jpg" alt="Foto de perfil" />
            </AboutPhoto>
            <AboutText>
              <h2>My About</h2>
              <p>
                Sou desenvolvedora de software, apaixonada por acessibilidade,
                design e crochê. Atualmente estudo Engenharia de Software na UnB.
              </p>
            </AboutText>
          </AboutContainer>
        </ContentWrapper>
      </SectionAbout>
      <Projects />
    </>
  );
};

export default Home;
