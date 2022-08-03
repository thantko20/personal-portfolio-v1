import styled, { css, useTheme } from 'styled-components';
import { motion, useCycle } from 'framer-motion';

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

const Menu = ({ children, isOpen }) => {
  return (
    <StyledMenu
      initial={{
        clipPath: 'circle(0% at 92% 3rem)',
      }}
      variants={menuVariants}
      animate={isOpen ? 'open' : 'closed'}
    >
      {children}
    </StyledMenu>
  );
};

const HamburgerMenu = () => {
  // const { isOpen, toggle, close } = useDisclosure();
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <StyledHamburgerMenu>
      <HamburgerMenuBtn onClick={() => toggleOpen()} isOpen={isOpen} />

      <Menu isOpen={isOpen}>
        <MenuLinksContainer variants={menuLinksContainerVariants}>
          <MenuLink onClick={() => toggleOpen(0)}>About</MenuLink>
          <MenuLink onClick={() => toggleOpen(0)}>Works</MenuLink>
          <MenuLink onClick={() => toggleOpen(0)}>Contact</MenuLink>
        </MenuLinksContainer>
      </Menu>
    </StyledHamburgerMenu>
  );
};

export default HamburgerMenu;
