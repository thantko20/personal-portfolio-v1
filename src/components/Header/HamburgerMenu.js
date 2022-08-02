import styled, { css, useTheme } from 'styled-components';
import { motion } from 'framer-motion';
import useDisclosure from '../../hooks/useDisclosure';

const StyledHamburgerMenuBtn = styled.button`
  background-color: transparent;
  width: 1.8rem;
  height: 1.8rem;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 100;
  cursor: pointer;

  span {
    background-color: white;
    height: 3px;
    width: 100%;
    border-radius: 12px;
    transition: transform 0.4s ease-in-out, background-color 0.3s ease-in-out;

    ${({ isOpen, theme }) =>
      isOpen &&
      css`
        background-color: ${theme.colors.primary['400']};
      `}
  }

  span:nth-child(2) {
    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: translateX(-0.5rem);
      `}
  }
`;

const StyledHamburgerMenu = styled.div`
  display: block;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

const StyledMenu = styled(motion.div)`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  z-index: 50;

  display: grid;
  place-content: center;
`;

const StyledMenuLink = styled(motion.li)`
  button {
    color: inherit;
    font: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

const MenuLinksContainer = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;

const HamburgerMenuBtn = ({ onClick, isOpen }) => {
  return (
    <StyledHamburgerMenuBtn
      onClick={onClick}
      isOpen={isOpen}
      aria-label='hamburger menu'
    >
      <span></span>
      <span></span>
      <span></span>
    </StyledHamburgerMenuBtn>
  );
};

const menuLinkVariants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  open: {
    opacity: 1,
    y: 0,
  },
  closed: { opacity: 0, y: 50 },
};

const menuLinksContainerVariants = {
  open: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const menuVariants = {
  open: {
    clipPath: 'circle(150% at 92% 3rem)',
    transition: {
      duration: 0.3,
      when: 'beforeChildren',
    },
  },
  closed: {
    clipPath: 'circle(0% at 92% 3rem)',
    transition: {
      duration: 0.3,
      when: 'afterChildren',
    },
  },
};

const MenuLink = ({ children, onClick }) => {
  const { colors } = useTheme();
  return (
    <StyledMenuLink
      variants={menuLinkVariants}
      whileHover={{ color: colors.primary['400'], x: -4 }}
    >
      <button onClick={onClick}>{children}</button>
    </StyledMenuLink>
  );
};

const HamburgerMenu = () => {
  const { isOpen, toggle, close } = useDisclosure();

  return (
    <StyledHamburgerMenu>
      <HamburgerMenuBtn onClick={toggle} isOpen={isOpen} />
      <StyledMenu
        isOpen={isOpen}
        variants={menuVariants}
        animate={isOpen ? 'open' : 'closed'}
      >
        <MenuLinksContainer variants={menuLinksContainerVariants}>
          <MenuLink onClick={close}>About</MenuLink>
          <MenuLink onClick={close}>Works</MenuLink>
          <MenuLink onClick={close}>Contact</MenuLink>
        </MenuLinksContainer>
      </StyledMenu>
    </StyledHamburgerMenu>
  );
};

export default HamburgerMenu;
