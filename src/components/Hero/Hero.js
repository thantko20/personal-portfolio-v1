import styled from 'styled-components';
import { Container, Button } from '../common';
import { motion } from 'framer-motion';
import SocialLinks from '../common/SocialLinks';
import { forwardRef } from 'react';
import ScrollDownButton from '../common/ScrollDownButton';
import { useScroll } from '../../ScrollProvider';

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -1px;

  display: flex;
  flex-direction: column;
`;

const HeroBodyText = styled.p`
  font-size: 1.25rem;
  margin-top: 1rem;
  letter-spacing: 2px;
`;

const HeroTextContainer = styled.div`
  max-width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    ${HeroTitle} {
      font-size: 4rem;
    }

    ${HeroBodyText} {
      font-size: 1.5rem;
      max-width: 55ch;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    ${HeroTitle} {
      font-size: 5.375rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    ${HeroTitle} {
      font-size: 6rem;
    }
  }
`;

const StyledAnimatedTextContainer = styled(motion.span)`
  color: ${({ theme }) => theme.colors.primary['500']};
`;

const HeroContainer = styled(Container)`
  padding-block: 1rem;
  height: calc(100vh - 6rem);
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: flex-start;
  justify-content: center;
  position: relative;
`;

const textArray = 'Thant Ko Zaw'.split('');

const textContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};
const charVariants = {
  hidden: {
    opacity: 0,
    x: 20,
    y: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
      delay: 0.2,
      duration: 0.5,
    },
  },
};

const AnimatedTextContainer = () => {
  return (
    <StyledAnimatedTextContainer variants={textContainerVariants}>
      {textArray.map((char, idx) => {
        if (char === ' ') {
          return (
            <span key={idx} style={{ display: 'inline-block' }}>
              &nbsp;
            </span>
          );
        }

        return (
          <motion.span
            style={{ display: 'inline-block' }}
            key={idx}
            variants={charVariants}
          >
            {char}
          </motion.span>
        );
      })}
    </StyledAnimatedTextContainer>
  );
};

const Hero = forwardRef((props, ref) => {
  const { worksRef, scrollTo } = useScroll();
  return (
    <HeroContainer
      as={motion.div}
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      ref={ref}
    >
      <HeroTextContainer>
        <HeroTitle>
          <div>Hi.</div>
          <div>
            I'm <AnimatedTextContainer />
          </div>
        </HeroTitle>
        <HeroBodyText>
          A frontend developer based in Myanmar who crafts scalable and
          maintainable websites.
        </HeroBodyText>
      </HeroTextContainer>
      <Button onClick={() => scrollTo(worksRef)}>Explore My Works</Button>
      <SocialLinks />
      <ScrollDownButton />
    </HeroContainer>
  );
});

export default Hero;
