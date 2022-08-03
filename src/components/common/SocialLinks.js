import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const StyledSocialLinkIcon = styled.a`
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary['400']};
  }
`;

const StyledSocialLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 1rem;
  }
`;

export const SocialLinkIcon = ({ icon, url }) => {
  return (
    <StyledSocialLinkIcon href={url} target='_blank'>
      {icon}
    </StyledSocialLinkIcon>
  );
};

const SocialLinks = () => {
  return (
    <StyledSocialLinks>
      <IconContext.Provider value={{ size: 32 }}>
        <SocialLinkIcon icon={<FaFacebook />} url='/' />
        <SocialLinkIcon icon={<FaGithub />} url='/' />
        <SocialLinkIcon icon={<FaLinkedin />} url='/' />
        <SocialLinkIcon icon={<FaDiscord />} url='/' />
      </IconContext.Provider>
    </StyledSocialLinks>
  );
};

export default SocialLinks;
