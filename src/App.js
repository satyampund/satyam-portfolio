import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Projects />
    </div>
  );
};

export default App;
