import React from 'react';
import About from './components/About/About';
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
    </div>
  );
}

export default App;
