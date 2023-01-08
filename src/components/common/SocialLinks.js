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
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: 1rem;
  }
`;

export const SocialLinkIcon = ({ icon, url, label }) => {
  return (
    <StyledSocialLinkIcon href={url} target='_blank' aria-label={label}>
      {icon}
    </StyledSocialLinkIcon>
  );
};

const SocialLinks = () => {
  return (
    <StyledSocialLinks>
      <IconContext.Provider value={{ size: 32 }}>
        <li>
          <SocialLinkIcon
            icon={<FaFacebook />}
            url='https://www.facebook.com/marcothant20/'
            label='facebook link'
          />
        </li>
        <li>
          <SocialLinkIcon
            icon={<FaGithub />}
            url='https://github.com/thantko20'
            label='github link'
          />
        </li>
        <li>
          <SocialLinkIcon
            icon={<FaLinkedin />}
            url='https://www.linkedin.com/in/thant-ko-zaw-722924219'
            label='linkedin link'
          />
        </li>
        <li>
          <SocialLinkIcon
            icon={<FaDiscord />}
            url='https://discord.com/users/422416397050839040'
            label='discord link'
          />
        </li>
      </IconContext.Provider>
    </StyledSocialLinks>
  );
};

export default SocialLinks;
