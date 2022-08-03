import styled from 'styled-components';
import { Container } from '../common/Container';
import HamburgerMenu from './HamburgerMenu';

const Logo = styled.span`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  z-index: 100;
`;

const NavLink = styled.li`
  font-weight: 500;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.primary['400']};
  }

  a {
    font: inherit;
    text-decoration: none;
    color: inherit;
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
  return (
    <StyledNavBar>
      <Logo>TK</Logo>
      <HamburgerMenu />
      <NavLinksContainer>
        <NavLink>
          <a href='/'>Works</a>
        </NavLink>
        <NavLink>
          <a href='/'>About</a>
        </NavLink>
        <NavLink>
          <a href='/'>Contact</a>
        </NavLink>
      </NavLinksContainer>
    </StyledNavBar>
  );
};

export default NavBar;
