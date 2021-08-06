import groq from 'groq';
import { sanityClient } from '../utils/sanity';

import Services from '../components/services/Services';

import TransitionWrapper from '../components/layout/TransitionWrapper';

const services = ({ servicesSection, callToAction }) => {
  return (
    <TransitionWrapper>
      <Services
        services={servicesSection}
        heroService='Service Philosophy'
        callToAction={callToAction}
      />
    </TransitionWrapper>
  );
};

const servicesQuery = groq`
*[_type == "servicesSection"]
`;
const ctaQuery = groq`*[_type == "callToAction"]`;

export async function getStaticProps() {
  // Fetch data from Sanity IO
  const servicesSection = await sanityClient.fetch(servicesQuery);
  const callToAction = await sanityClient.fetch(ctaQuery);

  return {
    props: {
      servicesSection,
      callToAction,
    },
  };
}
export default services;
