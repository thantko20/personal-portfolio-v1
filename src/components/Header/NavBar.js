import { useRef } from 'react';
import styled from 'styled-components';
import { useScroll } from '../../ScrollProvider';
import { Container } from '../common/Container';
import HamburgerMenu from './HamburgerMenu';

const Logo = styled.span`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  z-index: 100;
`;

const NavLink = styled.button`
  font-weight: 500;
  transition: color 0.3s ease-in-out;
  background-color: transparent;
  color: inherit;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.primary['400']};
  }
`;

const NavLinksContainer = styled.ul`
  display: none;
  align-items: center;
  gap: 4.125rem;
`;

const StyledNavBar = styled(Container)`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    ${NavLinksContainer} {
      display: flex;
    }
  }
`;

const NavBar = () => {
  const { worksRef, aboutRef, contactRef, scrollTo } = useScroll();
  return (
    <StyledNavBar>
      <Logo>TK</Logo>
      <HamburgerMenu />
      <NavLinksContainer>
        <li>
          <NavLink onClick={() => scrollTo(worksRef)}>Works</NavLink>
        </li>
        <li>
          <NavLink onClick={() => scrollTo(aboutRef)}>About</NavLink>
        </li>
        <li>
          <NavLink onClick={() => scrollTo(contactRef)}>Contact</NavLink>
        </li>
      </NavLinksContainer>
    </StyledNavBar>
  );
};

export default NavBar;
