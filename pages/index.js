import groq from 'groq';
import { sanityClient } from '../utils/sanity';

import HeroSection from '../components/hero/HeroSection';

const index = ({ heroSection, marketingSection }) => {
  return <HeroSection heroSection={heroSection[0]} />;
};

const heroQuery = groq`
*[_type == "heroSection"]{
  headline,
  image,
  copy,
  variant
  }
`;

const marketingQuery = groq`*[_type == "marketingSection"]{
  copy,
  image,
  title
}
`;

export async function getStaticProps() {
  // Fetch blog posts from Sanity IO
  const heroSection = await sanityClient.fetch(heroQuery);
  const marketingSection = await sanityClient.fetch(marketingQuery);
  return {
    props: {
      heroSection,
      marketingSection,
    },
  };
}
export default index;
