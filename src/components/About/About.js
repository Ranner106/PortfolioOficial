import React from 'react';
import Typewriter from 'typewriter-effect';
import { AboutContainer, AboutSection } from './style';
import { about } from '../../images';

function About() {
  return (
    <AboutContainer>
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
            <img src={about} alt="Ranner de Paula Logo" width={500} />

            <div className="text">
              <p>
                <span className="myname">Olá, eu sou Ranner de paula!</span> uma
                desenvolvedora Backend nascida em Rio de Janeiro.
              </p>
              <p>
                Desde que tive contato com uma matéria chamada Sistema de
                informação na faculdade me apaixonei completamente pelo mundo da
                tecnologia.
              </p>
              <p>
                Começei a assitir aos cursos do Professor Guanabara pelo
                Youtube, e começei a entender e praticar algumas linguagens de
                programação. Também ingressei em um curso especializado para o
                Aprendizado.
              </p>
              <p>
                Atualmente, faço alguns trabalhos freelancers de desenvolvimento
                de API para algumas empresas e me arrisco também no Front-end
                para melhorar o conhecimento.
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
    </AboutContainer>
  );
}

export default About;
