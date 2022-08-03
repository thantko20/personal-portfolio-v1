import Header from './components/Header/Header';
import React from 'react';
import Hero from './components/Hero/Hero';
import Divider from './components/common/Divider';
import Technologies from './components/Technologies/Technologies';
import Works from './components/Works/Works';
import { useScroll } from './ScrollProvider';

const App = () => {
  const { heroRef, technologiesRef, worksRef } = useScroll();
  return (
    <>
      <Header />
      <main>
        <Hero ref={heroRef} />
        <Divider />
        <Technologies ref={technologiesRef} />
        <Divider />
        <Works ref={worksRef} />
      </main>
    </>
  );
};

export default App;
