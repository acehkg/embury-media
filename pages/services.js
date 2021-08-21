import { useState, useEffect } from 'react';
import groq from 'groq';
import { sanityClient } from '../utils/sanity';
import { useCallToAction } from '../hooks/useCallToAction';

import TransitionWrapper from '../components/layout/TransitionWrapper';
import PageWrapper from '../components/layout/PageWrapper';

import HeroService from '../components/services/HeroService';
import ServicesLinks from '../components/services/ServicesLinks';

const services = ({ services }) => {
  /*   const [main, setMain] = useState([]);
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
  }, []); */

  return (
    <TransitionWrapper>
      <h1>TEST</h1>
    </TransitionWrapper>
  );
};

const servicesQuery = groq`
*[_type == "services"]
`;

export async function getStaticProps() {
  // Fetch data from Sanity IO
  const services = await sanityClient.fetch(servicesQuery);

  return {
    props: {
      services,
    },
  };
}
export default services;
