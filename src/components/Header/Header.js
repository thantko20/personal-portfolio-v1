import styled from 'styled-components';
import NavBar from './NavBar';

const StyledHeader = styled.header`
  width: 100%;
  position: sticky;
  top: 0;

  z-index: 6000;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    background-color: transparent;
    backdrop-filter: blur(12px);
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <NavBar />
    </StyledHeader>
  );
};

export default Header;
