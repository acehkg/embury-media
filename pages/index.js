import dynamic from 'next/dynamic';
import groq from 'groq';
import { sanityClient } from '../utils/sanity.server';
import TransitionWrapper from '../components/layout/TransitionWrapper';
import HeroSection from '../components/hero/HeroSection';
//import LandingSection from '../components/landing/LandingSection';
//import ServiceCardSection from '../components/services/ServiceCardSection';

const LandingSection = dynamic(() =>
  import('../components/landing/LandingSection')
);

const ServiceCardSection = dynamic(() =>
  import('../components/services/ServiceCardSection')
);

const index = ({ sanityData }) => {
  const { heroSection, firstSection, otherSections, sortedServices } =
    sanityData;

  return (
    <TransitionWrapper>
      <HeroSection heroSection={heroSection} />
      <LandingSection
        headline={firstSection.title}
        colorDesignToken={firstSection.colorDesignToken}
        copy={firstSection.content}
        sectionImage={firstSection.sectionImage}
        callToAction={firstSection.callToAction}
        colorDesignToken={firstSection.colorDesignToken}
        index={0}
        mb='4rem'
      />
      <ServiceCardSection
        services={sortedServices}
        headline='OUR SERVICES'
        mb='4rem'
      />
      {otherSections.map((section, index) => {
        return (
          <LandingSection
            key={section._id}
            headline={section.title}
            copy={section.content}
            index={index}
            callToAction={section.callToAction}
            sectionImage={section.sectionImage}
            colorDesignToken={section.colorDesignToken}
          />
        );
      })}
    </TransitionWrapper>
  );
};

const heroQuery = groq`
*[_type == "heroSection"][0]{
  image,copy,serviceHeadline
}
`;

const landingQuery = groq`
*[_type == "landingSection"]{copy, sectionOrder,_id,callToAction, content, colorDesignToken}
`;

const servicesQuery = groq`
*[_type == "services"]{_id, title, slug, image, sectionOrder, shortTitle}
`;

const landingContentQuery = groq`
*[_type == "landingSection"]{
  ...,
  content[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      }
    }
  }
}
`;

export async function getStaticProps() {
  // Fetch data from Sanity IO
  const heroSection = await sanityClient.fetch(heroQuery);
  const landingSections = await sanityClient.fetch(landingContentQuery);
  const services = await sanityClient.fetch(servicesQuery);

  const sortedSections = landingSections.sort(
    (a, b) => a.sectionOrder - b.sectionOrder
  );
  const firstSection = sortedSections.shift();
  const otherSections = sortedSections;

  const sortedServices = services.sort(
    (a, b) => a.sectionOrder - b.sectionOrder
  );
  return {
    props: {
      sanityData: {
        heroSection,
        firstSection,
        otherSections,
        sortedServices,
      },
    },
  };
}
export default index;
