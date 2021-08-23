import groq from 'groq';
import { sanityClient } from '../utils/sanity';

import HeroSection from '../components/hero/HeroSection';
import LandingSection from '../components/landing/LandingSection';

import TransitionWrapper from '../components/layout/TransitionWrapper';

const index = ({ heroSection, landingSections }) => {
  const sortedSections = landingSections.sort(
    (a, b) => a.sectionOrder - b.sectionOrder
  );

  return (
    <TransitionWrapper>
      <HeroSection heroSection={heroSection[0]} />
      {sortedSections.map((section) => {
        return <LandingSection key={section._id} copy={section.copy} />;
      })}
    </TransitionWrapper>
  );
};

const heroQuery = groq`
*[_type == "heroSection"]
`;

const landingQuery = groq`
*[_type == "landingSection"]{copy, sectionOrder,_id}
`;

export async function getStaticProps() {
  // Fetch data from Sanity IO
  const heroSection = await sanityClient.fetch(heroQuery);
  const landingSections = await sanityClient.fetch(landingQuery);

  return {
    props: {
      heroSection,
      landingSections,
    },
  };
}
export default index;
