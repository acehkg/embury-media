import groq from 'groq';
import { sanityClient } from '../utils/sanity.server';
import TransitionWrapper from '../components/layout/TransitionWrapper';
import ProjectsSection from '../components/projects/ProjectsSection';
import PageWrapper from '../components/layout/PageWrapper';
import PageSeo from '../components/seo/PageSeo';
import { useRouter } from 'next/router';
import { urlFor } from '../utils/sanity';

const projects = ({ projects, siteMeta }) => {
  const router = useRouter();
  const { asPath } = router;

  const { title, description, image } = siteMeta[0];

  const src = urlFor(image).auto('format').url();

  const metadata = {
    pageTitle: 'Projects',
    description: description,
    currentURL: `https://emburymedia.com${asPath}`,
    previewImage: `${src}`,
    siteName: title,
  };

  return (
    <>
      <PageSeo metadata={metadata} />
      <TransitionWrapper>
        <PageWrapper>
          <ProjectsSection projects={projects} />
        </PageWrapper>
      </TransitionWrapper>
    </>
  );
};

const projectQuery = groq`*[_type == "projectCard"]{_id,headline,description,image,link, gitHub}`;
const metaQuery = groq`*[_type == "siteSettings"]{
  title,description,image
}`;

export async function getStaticProps() {
  // Fetch data from Sanity IO
  const projects = await sanityClient.fetch(projectQuery);
  const siteMeta = await sanityClient.fetch(metaQuery);

  return {
    props: {
      projects,
      siteMeta,
    },
  };
}

export default projects;
