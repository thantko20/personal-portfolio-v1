import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Divider from './common/Divider';
import Technologies from './Technologies/Technologies';
import Works from './Works/Works';
import About from './About/About';
import { useScroll } from './ScrollProvider';
import BackToTopBtn from './common/BackToTopBtn';
import Contact from './Contact/Contact';
import ScrollIndicator from './common/scroll-indicator';

const Main = () => {
  const { topRef, heroRef, technologiesRef, worksRef, aboutRef, contactRef } =
    useScroll();
  return (
    <>
      {/* <ScrollIndicator /> */}
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

export default Main;
