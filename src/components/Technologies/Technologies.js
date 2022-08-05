import { forwardRef } from 'react';
import { FaCss3, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa';
import {
  SiFirebase,
  SiTailwindcss,
  SiStyledcomponents,
  SiTypescript,
} from 'react-icons/si';
import styled from 'styled-components';
import Section from '../common/Section';

const LogosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  justify-items: center;
  grid-column-gap: 5rem;
  grid-row-gap: 4rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-column-gap: 7rem;
  }

  > svg {
    color: ${({ theme }) => theme.colors.neutral['300']};
    width: 8rem;
    height: 8rem;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.primary['400']};
    }
  }
`;

const Technologies = forwardRef((props, ref) => {
  return (
    <Section title='Technologies' ref={ref}>
      <LogosContainer>
        <FaHtml5 title='HTML5' />
        <FaCss3 title='CSS3' />
        <FaJsSquare title='Javascript' />
        <FaReact title='React' />
        <SiTypescript title='Typescript' />
        <SiFirebase title='Firebase' />
        <SiTailwindcss title='Tailwindcss' />
        <SiStyledcomponents title='Styled Components' />
      </LogosContainer>
    </Section>
  );
});

export default Technologies;
