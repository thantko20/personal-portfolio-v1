import styled from 'styled-components';
import { useScroll } from '../ScrollProvider';
import { Container } from '../common/Container';
import HamburgerMenu from './HamburgerMenu';

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

const Logo = () => {
  return (
    <svg
      width='60'
      height='34'
      viewBox='0 0 60 34'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ zIndex: 100 }}
    >
      <path
        d='M26.216 0.303999V6.88H17.288V34H9.08V6.88H0.152V0.303999H26.216ZM49.8714 34L38.5434 19.12V34H30.3354V0.303999H38.5434V15.088L49.7754 0.303999H59.4234L46.3674 16.816L59.9034 34H49.8714Z'
        fill='white'
      />
    </svg>
  );
};

const NavBar = () => {
  const { worksRef, aboutRef, contactRef, scrollTo } = useScroll();
  return (
    <StyledNavBar>
      <Logo />
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
