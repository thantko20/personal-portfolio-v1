import { forwardRef } from 'react';
import Section from '../common/Section';
import ProjectsContainer from './Projects';

const projects = [
  {
    name: 'Reddit Clone',
    imgURL:
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'A mini version of Reddit created with React, Typescript, Firebase, tailwindcss and headlessUI. This includes most of the main features of Reddit.',
    tags: ['React', 'Typescript'],
    repoURL: '',
    liveURL: '',
  },
  {
    name: 'Reddit Clone',
    imgURL:
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'A mini version of Reddit created with React, Typescript, Firebase, tailwindcss and headlessUI. This includes most of the main features of Reddit.',
    tags: ['React', 'Typescript'],
    repoURL: '',
    liveURL: '',
  },
  {
    name: 'Reddit Clone',
    imgURL:
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'A mini version of Reddit created with React, Typescript, Firebase, tailwindcss and headlessUI. This includes most of the main features of Reddit.',
    tags: ['React', 'Typescript'],
    repoURL: '',
    liveURL: '',
  },
  {
    name: 'Reddit Clone',
    imgURL:
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'A mini version of Reddit created with React, Typescript, Firebase, tailwindcss and headlessUI. This includes most of the main features of Reddit.',
    tags: ['React', 'Typescript'],
    repoURL: '',
    liveURL: '',
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
