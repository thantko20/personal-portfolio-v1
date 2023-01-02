import { createContext, useContext, useRef } from 'react';

const ScrollProviderContext = createContext({
  topRef: null,
  heroRef: null,
  technologiesRef: null,
  worksRef: null,
  aboutRef: null,
  contactRef: null,
  scrollTo: () => {},
});

const ScrollProvider = ({ children }) => {
  const topRef = useRef(null);
  const heroRef = useRef(null);
  const technologiesRef = useRef(null);
  const worksRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollProviderContext.Provider
      value={{
        topRef,
        heroRef,
        technologiesRef,
        worksRef,
        aboutRef,
        contactRef,
        scrollTo,
      }}
    >
      {children}
    </ScrollProviderContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollProviderContext);

export default ScrollProvider;
