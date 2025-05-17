import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Projects from '../../components/Projects/page.jsx';
import About from '../../components/About/page.jsx';
import {
  SectionHello,
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
      <About />
      <Projects />
    </>
  );
};

export default Home;
