import React from 'react';
import About from './components/About/About';
import ContactForm from './components/Contact/ContactForm';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProjectMain from './components/Projects/ProjectMain/ProjectMain';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <About />
      <ProjectMain />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
