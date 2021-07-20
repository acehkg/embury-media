import groq from 'groq';
import { sanityClient } from '../utils/sanity';
import { Flex, Box, Text } from '@chakra-ui/react';

import HeroSection from '../components/hero/HeroSection';

const index = ({ heroSection }) => {
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
export async function getStaticProps() {
  // Fetch blog posts from Sanity IO
  const heroSection = await sanityClient.fetch(heroQuery);
  return {
    props: {
      heroSection,
    },
  };
}
export default index;
