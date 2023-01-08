import { motion, MotionConfig, useScroll } from 'framer-motion';
import { useEffect } from 'react';
import styled from 'styled-components';

const StyledScrollIndicator = styled(motion.div)`
  height: 4px;
  background: rgb(83, 1, 125);
  background: linear-gradient(
    90deg,
    rgba(83, 1, 125, 1) 0%,
    rgba(120, 18, 247, 1) 79%,
    rgba(255, 255, 255, 1) 100%
  );
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transform-origin: 0%;
  z-index: 9999;
`;

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  return <StyledScrollIndicator style={{ scaleX: scrollYProgress }} />;
};

export default ScrollIndicator;
