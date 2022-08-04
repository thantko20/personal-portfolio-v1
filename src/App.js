import Header from './components/Header/Header';
import React from 'react';
import Hero from './components/Hero/Hero';
import Divider from './components/common/Divider';
import Technologies from './components/Technologies/Technologies';
import Works from './components/Works/Works';
import About from './components/About/About';
import { useScroll } from './ScrollProvider';
import BackToTopBtn from './components/common/BackToTopBtn';
import Contact from './components/Contact/Contact';

const App = () => {
  const { topRef, heroRef, technologiesRef, worksRef, aboutRef, contactRef } =
    useScroll();
  return (
    <>
      <div ref={topRef} style={{ position: 'absolute', top: 0 }}></div>
      <Header />
      <main>
        <Hero ref={heroRef} />
        <Divider />
        <Technologies ref={technologiesRef} />
        <Divider />
        <Works ref={worksRef} />
        <Divider />
        <About ref={aboutRef} />
        <Divider />
        <Contact ref={contactRef} />
      </main>
      <BackToTopBtn />
    </>
  );
};

export default App;
