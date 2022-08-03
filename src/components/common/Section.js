import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from './Container';

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
      when: 'afterChildren',
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.1,
      when: 'beforeChildren',
    },
  },
};

const Section = ({ title, children }) => {
  return (
    <StyledSection
      as={motion.section}
      variants={sectionVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.2 }}
    >
      <SectionTitle>{title}</SectionTitle>
      <SectionBody>{children}</SectionBody>
    </StyledSection>
  );
};

export default Section;
