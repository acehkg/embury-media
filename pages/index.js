import groq from 'groq';
import { sanityClient } from '../utils/sanity';

import HeroSection from '../components/hero/HeroSection';

import TransitionWrapper from '../components/layout/TransitionWrapper';

const index = ({ heroSection }) => {
  console.log(heroSection);
  return (
    <div style={{ position: 'relative' }}>
      <TransitionWrapper>
        <HeroSection heroSection={heroSection[0]} />
      </TransitionWrapper>
    </div>
  );
};

const heroQuery = groq`
*[_type == "heroSection"]
`;

export async function getStaticProps() {
  // Fetch data from Sanity IO
  const heroSection = await sanityClient.fetch(heroQuery);

  return {
    props: {
      heroSection,
    },
  };
}
export default index;
