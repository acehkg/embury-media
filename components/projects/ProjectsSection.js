import { SimpleGrid } from '@chakra-ui/react';
import Section from '../layout/Section';
import ProjectCard from './ProjectCard';

const ProjectsSection = ({ projects }) => {
  return (
    <Section>
      <SimpleGrid minChildWidth='300px' spacing='2rem' w='100%'>
        {projects.map((project) => {
          return <ProjectCard key={project._id} project={project} />;
        })}
      </SimpleGrid>
    </Section>
  );
};

export default ProjectsSection;
