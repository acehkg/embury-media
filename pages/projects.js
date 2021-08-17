import groq from 'groq';
import { sanityClient } from '../utils/sanity';
import TransitionWrapper from '../components/layout/TransitionWrapper';
import ProjectsSection from '../components/projects/ProjectsSection';
const projects = ({ projects }) => {
  console.log(projects);
  return (
    <TransitionWrapper>
      <ProjectsSection projects={projects} />
    </TransitionWrapper>
  );
};

const projectQuery = groq`*[_type == "projectCard"]{_id,headline,description,image,link}`;
const ctaQuery = groq`*[_type == "callToAction"]`;

export async function getStaticProps() {
  // Fetch data from Sanity IO
  const projects = await sanityClient.fetch(projectQuery);
  const callToAction = await sanityClient.fetch(ctaQuery);

  return {
    props: {
      projects,
      callToAction,
    },
  };
}

export default projects;
