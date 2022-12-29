import React from 'react';
import About from './components/About/About';
import Header from './components/Header/Header';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <h1>
      <Header />
      <About />
      <GlobalStyles />
    </h1>
  );
}

export default App;
