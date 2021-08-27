import { useState, useEffect } from 'react';
import groq from 'groq';
import { sanityClient } from '../utils/sanity';
import useLandingSections from '../hooks/useLandingSections';
import useServices from '../hooks/useServices';

import TransitionWrapper from '../components/layout/TransitionWrapper';
import HeroSection from '../components/hero/HeroSection';
import LandingSection from '../components/landing/LandingSection';
import ServiceCardSection from '../components/services/ServiceCardSection';

const index = ({ heroSection, landingSections, services }) => {
  const [loading, setLoading] = useState(true);

  const { firstSection, otherSections, sectionsLoading } =
    useLandingSections(landingSections);

  const { sortedServices, servicesLoading } = useServices(services);

  useEffect(() => {
    if ((sectionsLoading && servicesLoading) === false) {
      setLoading(false);
    }
  }, [sectionsLoading, servicesLoading]);

  if (loading === true) {
    return null;
  }

  return (
    <TransitionWrapper>
      <HeroSection heroSection={heroSection[0]} />
      <LandingSection copy={firstSection.copy} index={0} mb='4rem' />
      <ServiceCardSection
        services={sortedServices}
        headline={heroSection[0].serviceHeadline}
        mb='4rem'
      />
      {otherSections.map((section, index) => {
        return (
          <LandingSection key={section._id} copy={section.copy} index={index} />
        );
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

const servicesQuery = groq`
*[_type == "services"]{_id, title, slug, image, sectionOrder}
`;

export async function getStaticProps() {
  // Fetch data from Sanity IO
  const heroSection = await sanityClient.fetch(heroQuery);
  const landingSections = await sanityClient.fetch(landingQuery);
  const services = await sanityClient.fetch(servicesQuery);

  return {
    props: {
      heroSection,
      landingSections,
      services,
    },
  };
}
export default index;
