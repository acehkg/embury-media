import groq from 'groq';
import { sanityClient } from '../utils/sanity';

import { Flex } from '@chakra-ui/react';

import HeroSection from '../components/hero/HeroSection';
import MarketingSection from '../components/marketing/MarketingSection';

import CallToAction from '../components/interfaces/CallToAction';
import ScrollButton from '../components/interfaces/ScrollButton';
import { useCallToAction } from '../hooks/useCallToAction';

const index = ({ heroSection, marketingSections, callToAction }) => {
  const contact = useCallToAction(callToAction, 'Contact');
  return (
    <>
      <HeroSection heroSection={heroSection[0]} callToAction={callToAction} />
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
          text={contact.copy}
          variant={contact.buttonVariant}
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

const ctaQuery = groq`*[_type == "callToAction"]`;

export async function getStaticProps() {
  // Fetch data from Sanity IO
  const heroSection = await sanityClient.fetch(heroQuery);
  const marketingSections = await sanityClient.fetch(marketingQuery);
  const callToAction = await sanityClient.fetch(ctaQuery);

  return {
    props: {
      heroSection,
      marketingSections,
      callToAction,
    },
  };
}
export default index;
