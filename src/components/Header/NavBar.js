import styled from 'styled-components';
import { Container } from '../common/Container';

const Logo = styled.span`
  font-size: 3rem;
  color: white;
  font-weight: 700;
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
  display: flex;
  align-items: center;
  gap: 4.125rem;
`;

const StyledNavBar = styled(Container)`
  padding: 1.25rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <Logo>TK</Logo>
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
