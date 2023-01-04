import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import {
  AboutContainer,
  AboutSection,
  SkillsSection,
  SkillContainer,
} from './style';
import { skills } from './data';
import { about } from '../../images';

function About() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    }

    // Monitore o scroll da janela e atualize setScrollY no estado
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [innerWidth, innerHeight]);
  return (
    <AboutContainer id="top">
      <AboutSection
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
      >
        <div className="description">
          <h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Ranner de Paula')
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString('Welcome to my portfolio')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('Seja bem vindo ao meu portfólio')
                  .start();
              }}
            />
          </h1>
          <h2 id="About">Back-End Developer</h2>
          <div className="line" />
          <div className="aboutMe">
            <img
              className="logo"
              src={about}
              alt="Ranner de Paula Logo"
              width={500}
            />

            <div className="text">
              <p>
                Olá, eu sou <span className="myname">Ranner de Paula!</span> uma
                desenvolvedora Backend nascida em Rio de Janeiro.
              </p>
              <p>
                Desde que tive contato com uma matéria chamada Sistema da
                informação na faculdade me apaixonei completamente pelo mundo da
                tecnologia.
              </p>
              <p>
                Comecei a assitir aos cursos do Professor Guanabara pelo
                Youtube, e começei a entender e praticar algumas linguagens de
                programação. Também ingressei em um curso especializado para o
                Aprendizado.
              </p>
              <p>
                Atualmente, faço alguns trabalhos freelancers de desenvolvimento
                de API para algumas empresas tanto na parte de Front-end, mas
                principalmente na parte de Backend.
              </p>
              <p>
                caso esteja interessado, contate-me, será um imenso prazer.
                Detalhes sobre minhas redes socias estão aqui{' '}
                <a href="#Contact">
                  <span>section</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </AboutSection>

      <SkillsSection
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
      >
        <h1 className="skills">Skills</h1>
        <div className="line" />
        <div className="skills-container">
          {skills.map(({ name, svg, color }, index) => (
            <SkillContainer
              initial={{ opacity: 0, y: -70 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: innerWidth > 1200 ? index * 0.1 : Math.random() - 0.5,
                  bounce: 0.5,
                },
              }}
              key={name}
              color={color}
            >
              {svg}
              <p>{name}</p>
            </SkillContainer>
          ))}
        </div>
      </SkillsSection>
    </AboutContainer>
  );
}

export default About;
