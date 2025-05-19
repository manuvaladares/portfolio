import React from 'react';
import PhotoCarousel from '../Carousel/page.jsx';
import {
  SectionAbout,
  AboutText,
  PhotoLeftup, PhotoRightup,
  PhotoLeftdown, PhotoRightdown
} from './styled';
import photo1 from '../../assets/foto1.jpg';
import photo2 from '../../assets/foto2.png';
import photo3 from '../../assets/foto3.jpg';
import photo4 from '../../assets/foto4.jpg';
import photo5 from '../../assets/foto5.jpg';

const About = () => {
  return (
    <SectionAbout>
      <PhotoLeftup src={photo1} alt="Decorative 1" />
      <PhotoLeftdown src={photo5} alt="Decorative 1" />
      <PhotoRightup src={photo4} alt="Decorative 2" />
      <PhotoRightdown src={photo2} alt="Decorative 2" />

      <PhotoCarousel photos={[photo1, photo2, photo4, photo5]} />
      <AboutText id="about">
          <h2>Code and Curiosity</h2>
          <p>I'm currently pursuing a B.Sc. in Software Engineering (2022-2027) at the University of Brasília (UnB) and working as a research student.  I have shaped my academic and professional journey around the intersection of technology, accessibility, and research. </p>
          <p>
            From 2022 to 2024, I was a part of the 
            <a 
              href="https://www.meninas.cic.unb.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: "#574bdb", textDecoration: "underline", margin: "0 4px" }}
            >
              Meninas.Comp project
            </a>
            , which empowers young women to explore careers in tech. During this time—one year as a scholarship student—I helped organize events that fostered community, visibility, and support among women in computing at UnB.
          </p>
          <p>
            In 2023, I joined 
            <a
              href="https://www.linkedin.com/company/baitts/?originalSubdomain=br"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#574bdb", textDecoration: "underline", margin: "0 4px" }}
            >
              BAITTS
            </a>
            as a volunteer front-end developer. The company builds a talent platform focused on increasing hiring opportunities for women. There, I gained hands-on experience with a developer’s daily routine, participating in daily stand-ups and learning to use Git professionally in a collaborative environment.
          </p>
          <p>
            In 2024, I interned at the Environmental Sanitation Company of the Federal District, where I developed a machine learning model to support chemical dosage decisions in wastewater treatment, based on real-time water data.
          </p>
          <p>
            That same year, I published my 
            <a
              href="https://ieeexplore.ieee.org/document/10893151"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#574bdb", textDecoration: "underline", margin: "0 4px" }}
            >
              first academic paper
            </a>
            and joined 
            <a
              href="https://itrac.unb.br/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#574bdb", textDecoration: "underline", margin: "0 4px" }}
            >
              ITRAC (Information Technology, Research and Application Center)
            </a>
            , where I now focus on digital accessibility and public digital services—exploring how to improve the development, usability of GOV public services.
          </p>
          <p>As a developer, I work mostly with React and JavaScript on the front end, and I have experience with Python, especially in data analysis, automation, and ML prototyping. I’m used to agile workflows, enjoy turning user requirements into usable software, and often dive deep into database modeling.</p>
          <p>I am driven by curiosity and by projects that positively impact people's lives. This space represents my learning journey. </p>
        </AboutText>
    </SectionAbout>
  );
};

export default About;
