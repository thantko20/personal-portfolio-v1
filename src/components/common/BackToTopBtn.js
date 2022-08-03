import { useInView } from 'framer-motion';
import { IoIosArrowUp } from 'react-icons/io';
import styled from 'styled-components';
import { useScroll } from '../../ScrollProvider';

const StyledBackToTopBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.primary['700']};
  color: ${({ theme }) => theme.colors.primary['100']};
  cursor: pointer;
  border: none;
  border-radius: 9999px;
  width: 3rem;
  height: 3rem;
  display: grid;
  place-content: center;
  position: fixed;
  bottom: 5%;
  right: 50vw;
  transform: translateX(50%);
  z-index: 1000;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary['600']};
  }
`;

const BackToTopBtn = () => {
  const { heroRef, scrollTo } = useScroll();
  const isInView = useInView(heroRef);

  return (
    <>
      {!isInView && (
        <StyledBackToTopBtn
          aria-label='scroll back to top'
          onClick={() => scrollTo(heroRef)}
        >
          <IoIosArrowUp size={32} />
        </StyledBackToTopBtn>
      )}
    </>
  );
};

export default BackToTopBtn;
