import groq from 'groq';
import { sanityClient } from '../utils/sanity';

import { Flex } from '@chakra-ui/react';

import HeroSection from '../components/hero/HeroSection';
import MarketingSection from '../components/marketing/MarketingSection';

import CallToAction from '../components/interfaces/CallToAction';
import ScrollButton from '../components/interfaces/ScrollButton';

const index = ({ heroSection, marketingSections }) => {
  return (
    <>
      <HeroSection heroSection={heroSection[0]} />
      {marketingSections.map((section, index) => {
        return (
          <MarketingSection
            marketingSection={section}
            key={index}
            index={index}
          />
        );
      })}
      <Flex
        width='80%'
        mx='auto'
        justifyContent='space-between'
        alignItems='center'
        direction={{ base: 'column', lg: 'row' }}
      >
        <CallToAction
          href='/contact'
          text='get in touch'
          variant='callToAction'
          py='2rem'
        />
        <ScrollButton
          target='top'
          direction='up'
          size='mobile'
          text='BACK TO TOP'
        />
      </Flex>
    </>
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

const marketingQuery = groq`*[_type == "marketingSection"]{
  copy,
  image,
  title
}
`;

export async function getStaticProps() {
  // Fetch data from Sanity IO
  const heroSection = await sanityClient.fetch(heroQuery);
  const marketingSections = await sanityClient.fetch(marketingQuery);

  return {
    props: {
      heroSection,
      marketingSections,
    },
  };
}
export default index;
