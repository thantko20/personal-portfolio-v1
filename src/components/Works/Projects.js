import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { GoLinkExternal } from 'react-icons/go';
import Image from 'next/image';

const Tag = styled.span`
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.primary['100']};
  font-size: 0.75rem;
  font-weight: 500;
  margin-top: -1rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 0.5rem;
  row-gap: 1.375rem;
`;

const ProjectImage = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  aspect-ratio: 2/1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.875rem;
  font-weight: 500;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.neutral['400']};
  max-width: 45em;
`;

const Link = styled.a`
  color: white;
  text-decoration: underline;
  font-weight: 500;
  transition: color 0.3s ease-in-out;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary['400']};
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  width: max-content;
  margin-top: auto;
`;

const ProjectDetail = styled.div`
  padding: 1.375rem;
  flex: 2;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

const StyledProject = styled(motion.div)`
  width: 100%;
  min-height: 15rem;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  border-radius: 1.25rem;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;

    ${({ orientation }) =>
      orientation === 'right' &&
      css`
        text-align: right;
        flex-direction: row-reverse;
        ${ProjectDetail} {
          align-items: flex-end;
        }
      `}
  }
`;

const StyledProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const projectVariants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.2,
    },
  },
};

const Project = (props) => {
  return (
    <StyledProject
      variants={projectVariants}
      initial='offscreen'
      whileInView='onscreen'
      orientation={props.orientation}
    >
      <ProjectImage>
        <Image
          src={props.imgURL}
          alt={props.name}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </ProjectImage>
      <ProjectDetail>
        <ProjectTitle>{props.name}</ProjectTitle>
        <TagsContainer>
          {props.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>
        <ProjectDescription>{props.description}</ProjectDescription>
        <LinksContainer>
          <Link href={props.repoURL} target='_blank'>
            View Repo {<AiFillGithub size={20} />}
          </Link>
          <Link href={props.liveURL} target='_blank'>
            Live Preview {<GoLinkExternal size={20} />}
          </Link>
        </LinksContainer>
      </ProjectDetail>
    </StyledProject>
  );
};

const ProjectsContainer = ({ projects }) => {
  return (
    <StyledProjectsContainer>
      {projects.map((project, idx) => (
        <Project
          key={idx}
          orientation={idx % 2 === 0 ? 'left' : 'right'}
          {...project}
        />
      ))}
    </StyledProjectsContainer>
  );
};

export default ProjectsContainer;
