import { useState, useEffect } from 'react';
import groq from 'groq';
import { sanityClient } from '../utils/sanity';
import { useCallToAction } from '../hooks/useCallToAction';

import TransitionWrapper from '../components/layout/TransitionWrapper';
import PageWrapper from '../components/layout/PageWrapper';

import HeroService from '../components/services/HeroService';
import ServicesLinks from '../components/services/ServicesLinks';

const services = ({ servicesSection }) => {
  const [main, setMain] = useState([]);
  const [otherServices, setOtherServices] = useState([]);

  useEffect(() => {
    const [mainSection] = servicesSection.filter(
      (service) => service.hero === true
    );
    setMain(mainSection);
    const others = servicesSection.filter((service) => service.hero !== true);
    const sorted = others.sort(function (a, b) {
      return a.sectionOrder - b.sectionOrder;
    });
    setOtherServices(sorted);
  }, []);

  return (
    <TransitionWrapper>
      <HeroService service={main} />
      <ServicesLinks services={otherServices} />
    </TransitionWrapper>
  );
};

const servicesQuery = groq`
*[_type == "servicesSection"]{_id,title,slug,copy,sectionOrder,hero}
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
