import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { forwardRef } from 'react';

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 3rem;
  }
`;

const SectionBody = styled.div`
  padding-top: 3rem;
`;

const StyledSection = styled(Container)`
  padding-block: 2rem;
`;

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      delay: 0.2,
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Section = forwardRef(({ title, children }, ref) => {
  return (
    <StyledSection
      as={motion.section}
      variants={sectionVariants}
      initial='hidden'
      whileInView='visible'
      ref={ref}
    >
      <SectionTitle>{title}</SectionTitle>
      <SectionBody>{children}</SectionBody>
    </StyledSection>
  );
});

export default Section;
