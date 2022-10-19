import { forwardRef } from 'react';
import Section from '../common/Section';
import ProjectsContainer from './Projects';
import RedditClone from '../../assets/reddit_clone.png';
import ShoppingCart from '../../assets/shopping_cart.png';
import Portfolio from '../../assets/portfolio_ss.png';
import Pomodoro from '../../assets/pomodoro.png';
import Battleship from '../../assets/battleship.png';
import Bloggy from '../../assets/Bloggy_Home_Page.png';

const projects = [
  {
    name: 'Bloggy',
    imgURL: Bloggy,
    description:
      'A RESTful mini blog application created with MERN stack. The blog content can be also created and edited with Rich Text Editor. Used TipTap for RTE.',
    tags: ['React', 'Express', 'MongoDB', 'Typescript', 'MERN', 'RESTApi'],
    repoURL: 'https://github.com/thantko20/blog-frontend',
    liveURL: 'https://bloggy-pink.vercel.app',
  },
  {
    name: 'Reddit Clone',
    imgURL: RedditClone,
    description:
      'A mini version of Reddit created with React, Typescript, Firebase, tailwindcss and headlessUI. This includes most of the main features of Reddit.',
    tags: ['React', 'Typescript', 'Tailwindcss', 'Firebase'],
    repoURL: 'https://github.com/thantko20/reddit-clone',
    liveURL: 'https://reddit-clone-marco.vercel.app/',
  },
  {
    name: 'Shopping Cart',
    imgURL: ShoppingCart,
    description:
      'A shopping cart project created to learn react router. Product details from the fakestore api. Made with React and tailwindcss.',
    tags: ['React', 'Tailwindcss', 'API'],
    repoURL: 'https://github.com/thantko20/shopping-cart',
    liveURL: 'https://thantko20.github.io/shopping-cart/',
  },
  {
    name: 'My Personal Portfolio',
    imgURL: Portfolio,
    description:
      "The one you are currently visiting! It's my first time tinkering with framer motion. Made the design in Figma. Developed with React, Framer Motion, and Styled Components.",
    tags: ['React', 'Styled Components', 'Framer Motion', 'Figma'],
    repoURL: 'https://github.com/thantko20/personal-portfolio-v1',
    liveURL: 'https://thant-ko-portfolio.vercel.app/',
  },
  {
    name: 'Live Pomodoro Timer',
    imgURL: Pomodoro,
    description:
      'A mini pomodoro timer created with React and ChakraUI. Made for myself to focus on my studies.',
    tags: ['React', 'ChakraUI'],
    repoURL: 'https://github.com/thantko20/mini-pomodoro-timer',
    liveURL: 'https://thantko20.github.io/mini-pomodoro-timer/',
  },
  {
    name: 'Battleship',
    imgURL: Battleship,
    description:
      'A classic battleship game where the player plays against the computer. Created with vanilla javascript and tested with jest framework.',
    tags: ['Javascript', 'Jest', 'Testing'],
    repoURL: 'https://github.com/thantko20/battleship',
    liveURL: 'https://thantko20.github.io/battleship/',
  },
];

const Works = forwardRef((props, ref) => {
  return (
    <Section title='Works' ref={ref}>
      <ProjectsContainer projects={projects} />
    </Section>
  );
});

export default Works;
