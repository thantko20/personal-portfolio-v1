import styled from 'styled-components';
import NavBar from './NavBar';

const StyledHeader = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px);
`;

const Header = () => {
  return (
    <StyledHeader>
      <NavBar />
    </StyledHeader>
  );
};

export default Header;
