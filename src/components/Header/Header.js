import styled from 'styled-components';
import NavBar from './NavBar';

const StyledHeader = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  background-color: transparent;
  backdrop-filter: blur(8px);
  z-index: 9999;
`;

const Header = () => {
  return (
    <StyledHeader>
      <NavBar />
    </StyledHeader>
  );
};

export default Header;
