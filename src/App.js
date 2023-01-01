import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
