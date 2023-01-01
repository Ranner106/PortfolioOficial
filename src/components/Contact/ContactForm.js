/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { ContactContainer, ContactTextsContainer, ContactDivs } from './style';

function ContactForm() {
  const [state, handleSubmit] = useForm('mpzezagn');
  if (state.succeeded) {
    return (
      <p
        style={{
          padding: '.6rem',
          marginBottom: '1.4rem',
          border: '2px solid #fff',
          borderRadius: '10px',
          color: '#FFF',
          fontSize: '.9rem',
          textAlign: 'center',
        }}
      >
        Thanks for joining!
      </p>
    );
  }
  return (
    <ContactContainer
      initial={{ x: -300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false }}
      id="Contact"
    >
      <h1>Contact me</h1>
      <div className="purple-line" />

      <ContactDivs>
        <ContactTextsContainer>
          <p>
            Eu estou <span>aberta a trabalho</span> e a novos projetos. Entre em
            contato comigo pelo formulário ao lado ou me envie um email:
          </p>
          <p>
            <a href="mailto:rannerdepaula@gmail.com">rannerdepaula@gmail.com</a>
          </p>
          <p>Visite minhas redes sociais:</p>
          <div className="social-icons-container">
            <a
              href="https://github.com/Ranner106"
              id="github-link"
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub className="social-icon github" />
            </a>
            <a
              href="https://www.linkedin.com/in/ranner-de-paula-7a902b232/"
              id="linkedin-link"
              target="_blank"
              rel="noreferrer"
            >
              <SiLinkedin className="social-icon linkedin" />
            </a>
          </div>
        </ContactTextsContainer>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            justifyContent: 'center',
          }}
          onSubmit={handleSubmit}
        >
          <label
            style={{
              maxWidth: '1000px',
              color: 'white',
              marginBottom: '.4rem',
            }}
            htmlFor="name"
          >
            Nome
          </label>
          <input
            id="namel"
            type="name"
            name="name"
            placeholder="Digite seu nome"
            style={{
              padding: '.6rem',
              marginBottom: '1.4rem',
              border: '2px solid #fff',
              color: '#000',
              borderRadius: '10px',
              fontSize: '1rem',
            }}
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <label
            style={{
              maxWidth: '1000px',
              color: 'white',
              marginBottom: '.4rem',
            }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Digite seu email"
            style={{
              padding: '.6rem',
              marginBottom: '1.4rem',
              border: '2px solid #fff',
              borderRadius: '10px',
              color: '#000',
              fontSize: '.9rem',
            }}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label
            style={{
              maxWidth: '1000px',
              color: 'white',
              marginBottom: '.4rem',
            }}
          >
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            style={{
              padding: '.6rem',
              marginBottom: '1.4rem',
              border: '2px solid #fff',
              borderRadius: '10px',
              color: '#000',
              fontSize: '.9rem',
            }}
            placeholder="Deixe sua mensagem"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            style={{
              maxWidth: '1000px',
              padding: '.7rem .5rem',
              borderRadius: '10px',
              background: '#C147E9',
              color: '#FFF',
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
            }}
            disabled={state.submitting}
          >
            Enviar
          </button>
        </form>
      </ContactDivs>
    </ContactContainer>
  );
}

export default ContactForm;
