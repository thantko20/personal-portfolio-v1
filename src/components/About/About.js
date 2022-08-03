import { forwardRef } from 'react';
import styled from 'styled-components';
import Section from '../common/Section';

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor
          totam in eaque incidunt consequatur ipsam doloribus repellat illum?
          Error quod fugit sit exercitationem aut quam porro officiis dicta
          neque! Repellendus corrupti exercitationem repellat nobis deserunt
          voluptas blanditiis et totam culpa quam. Officia, maxime praesentium
          magnam alias nesciunt laudantium, provident minus, numquam iste sit
          doloribus deleniti eos nihil consectetur. Voluptas!
        </Paragraph>
        <StyledImage
          src='https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='thant ko zaw'
        />
      </StyledContainer>
    </Section>
  );
});

export default About;
