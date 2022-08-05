import styled, { keyframes } from 'styled-components';
import { useScroll } from '../../ScrollProvider';

const frames = keyframes`
  0% {
    top: 15%
  }
  20% {
    top: 65%
  }
  60% {
    top: 15%;
  }
  100% {
    top: 15%;
  }
`;

const StyledScrollDownButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 3px solid white;
  border-radius: 9999px;
  width: 1.5rem;
  height: 3rem;

  position: absolute;
  left: 50%;
  bottom: 1rem;
  transform: translateX(-50%);

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    position: absolute;
    background-color: white;
    border-radius: 9999px;
    right: 50%;
    top: 10%;
    transform: translateX(50%);
    animation: ${frames} 3s ease-in-out infinite;
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
