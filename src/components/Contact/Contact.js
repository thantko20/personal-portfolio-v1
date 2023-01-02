import Section from '../common/Section';
import SocialLinks from '../common/SocialLinks';
import { forwardRef } from 'react';
import styled from 'styled-components';
import Form from './Form';

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
  justify-content: center;

  h4 {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

const Paragraph = styled.p`
  max-width: 24em;
`;

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;

    ${RightSection} {
      align-items: center;
    }
  }
`;

const Contact = forwardRef((props, ref) => {
  return (
    <Section title="Let's connect!" ref={ref}>
      <StyledContact>
        <LeftSection>
          <Paragraph>
            I’m currently looking for full-time or freelance jobs in frontend
            development. Shoot me a message if you think I’m a good fit for your
            team or project!
          </Paragraph>
          <Form />
        </LeftSection>
        <RightSection>
          <h4>Or connect me via my socials!</h4>
          <SocialLinks />
        </RightSection>
      </StyledContact>
    </Section>
  );
});

export default Contact;
