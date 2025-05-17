import React from 'react';
import {
  SectionAbout,
  AboutText,
  PhotoLeft, PhotoRight
} from './styled';
import foto1 from '../../assets/foto.jpeg';
import photo2 from '../../assets/school.png';

const About = () => {
  return (
    <SectionAbout>
      <PhotoLeft src={foto1} alt="Decorative 1" />
      <PhotoRight src={photo2} alt="Decorative 2" />

      <AboutText>
          <h2>Code and Curiosity</h2>
          <p>I'm currently pursuing a B.Sc. in Software Engineering (2022-2027) at the University of Brasília (UnB) and working as a research student.  I have shaped my academic and professional journey around the intersection of technology, accessibility, and research. </p>
          <p>From 2022 to 2024, I was a part of the Meninas.Comp project, which empowers young women to explore careers in tech. During this time—one year as a scholarship student—I helped organize events that fostered community, visibility, and support among women in computing at UnB.</p>
          <p>In 2023, I joined BAITTS as a volunteer front-end developer. The company builds a talent platform focused on increasing hiring opportunities for women. There, I gained hands-on experience with a developer’s daily routine, participating in daily stand-ups and learning to use Git professionally in a collaborative environment.</p>
          <p>In 2024, I interned at the Environmental Sanitation Company of the Federal District, where I developed a machine learning model to support chemical dosage decisions in wastewater treatment, based on real-time water data.</p>
          <p>That same year, I published my first academic paper and joined ITRAC (Information Technology, Research and Application Center), where I now focus on digital accessibility and public digital services—exploring how to improve the development, usability of GOV public services.</p>
          <p>As a developer, I work mostly with React and JavaScript on the front end, and I have experience with Python, especially in data analysis, automation, and ML prototyping. I’m used to agile workflows, enjoy turning user requirements into usable software, and often dive deep into database modeling.</p>
          <p>I am driven by curiosity and by projects that positively impact people's lives. This space represents my learning journey. </p>
        </AboutText>
    </SectionAbout>
  );
};

export default About;
