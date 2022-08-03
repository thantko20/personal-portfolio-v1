import styled from 'styled-components';
import { useScroll } from '../../ScrollProvider';

const StyledScrollDownButton = styled.button`
  position: absolute;
  cursor: pointer;
  background-color: transparent;
  border: 3px solid white;
  border-radius: 9999px;
  width: 1.5rem;
  height: 3rem;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    position: absolute;
    background-color: white;
    border-radius: 9999px;
    right: 50%;
    bottom: 10%;
    transform: translateX(50%);
  }
`;

const ScrollDownButton = () => {
  const { technologiesRef, scrollTo } = useScroll();

  return (
    <StyledScrollDownButton
      aria-label='scroll down'
      onClick={() => scrollTo(technologiesRef)}
    />
  );
};

export default ScrollDownButton;
