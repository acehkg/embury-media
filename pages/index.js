import groq from 'groq';
import { sanityClient, urlFor, PortableText } from '../utils/sanity';
import { Flex, Box, Text } from '@chakra-ui/react';
const index = ({ heroSection }) => {
  const { image, headline, copy } = heroSection[0];

  const src = urlFor(image).auto('format').url();

  return (
    <Flex
      w='80%'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
      mx='auto'
    >
      <Box>
        <Text textStyle='h1'>{headline}</Text>
        <Box textStyle='p'>
          <PortableText blocks={copy} />
        </Box>
      </Box>
      <img src={src} />
    </Flex>
  );
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
