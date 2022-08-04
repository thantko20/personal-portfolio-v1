import { forwardRef } from 'react';
import styled from 'styled-components';
import Section from '../common/Section';
import profile from '../../assets/profile.jpg';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  align-items: flex-start;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
  }
`;

const Paragraph = styled.p`
  flex: 1;
  max-width: 36.875em;
  padding: 0;
  font-size: 1.125rem;
  line-height: 1.6;
`;

const StyledImage = styled.img`
  flex: 1;
  max-width: 16rem;
  max-height: 16rem;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.primary['400']};
`;

const About = forwardRef((props, ref) => {
  return (
    <Section title='About Me' ref={ref}>
      <StyledContainer>
        <Paragraph>
          I&apos;ve been always passionate about technology and creating things
          using what I&apos;ve learnt. I started programming in mid 2021. At
          first it was just a hobby. Them, I kept digging deeper and deeper
          through the weeds of programming and I knew that it&apos;s my destiny
          to make a career in programming. I&apos;m currently following{' '}
          <strong>The Odin Project</strong> curriculum with the help of the
          amazing community on their discord. My goal is to become a fullstack
          developer in web development. I dropped out of medical school a few
          months ago and as of today, I&apos;m pursuing a Diploma in Computing
          from NCC Education from the UK.
        </Paragraph>
        <StyledImage src={profile} alt='thant ko zaw' />
      </StyledContainer>
    </Section>
  );
});

export default About;
