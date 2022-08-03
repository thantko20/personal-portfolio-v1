import Header from './components/Header/Header';
import React from 'react';
import Hero from './components/Hero/Hero';
import Divider from './components/common/Divider';
import Technologies from './components/Technologies/Technologies';
import Works from './components/Works/Works';
import About from './components/About/About';
import { useScroll } from './ScrollProvider';

const App = () => {
  const { heroRef, technologiesRef, worksRef, aboutRef } = useScroll();
  return (
    <>
      <Header />
      <main>
        <Hero ref={heroRef} />
        <Divider />
        <Technologies ref={technologiesRef} />
        <Divider />
        <Works ref={worksRef} />
        <Divider />
        <About ref={aboutRef} />
      </main>
    </>
  );
};

export default App;
