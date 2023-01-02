import { forwardRef } from 'react';
import styled, { useTheme } from 'styled-components';
import Section from '../common/Section';
import profile from '../../assets/profile.jpg';
import Image from 'next/image';

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

  > a {
    color: white;
    font-weight: 700;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.primary['400']};
    }
  }
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
  const theme = useTheme();
  return (
    <Section title='About Me' ref={ref}>
      <StyledContainer>
        <Paragraph>
          I&apos;ve been always passionate about technology and creating things
          using what I&apos;ve learnt. I started learning programming in mid
          2021. At first it was just a hobby. Then, I kept digging deeper and
          deeper through the weeds of programming and I knew that it&apos;s my
          destiny to make a career in programming. I&apos;m currently following{' '}
          <a
            href='https://www.theodinproject.com/'
            target='_blank'
            rel='noreferrer'
          >
            The Odin Project
          </a>{' '}
          curriculum with the help of the amazing community on their discord. My
          goal is to become a fullstack developer in web development. I dropped
          out of medical school in early 2022 and as of today, I&apos;m pursuing
          a Diploma in Computing from NCC Education from the UK.
        </Paragraph>
        {/* <StyledImage src={profile} alt='thant ko zaw' /> */}
        <Image
          src='/profile.jpg'
          alt='thant ko zaw'
          width={500}
          height={500}
          style={{
            flex: 1,
            width: '100%',
            height: 'auto',
            maxWidth: '16rem',
            aspectRatio: 1,
            objectFit: 'cover',
            borderRadius: '2rem',
            border: `2px solid ${theme.colors.primary[400]}`,
          }}
        />
      </StyledContainer>
    </Section>
  );
});

export default About;
