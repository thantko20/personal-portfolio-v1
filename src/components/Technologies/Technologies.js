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
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;

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

const Technologies = () => {
  return (
    <Section title='Technologies'>
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
};

export default Technologies;
