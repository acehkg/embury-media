import groq from 'groq';
import { sanityClient } from '../utils/sanity';

import Services from '../components/services/Services';

const services = ({ servicesSection }) => {
  return (
    <Services services={servicesSection} heroService='Service Philosophy' />
  );
};

const servicesQuery = groq`
*[_type == "servicesSection"]
`;

export async function getStaticProps() {
  // Fetch data from Sanity IO
  const servicesSection = await sanityClient.fetch(servicesQuery);

  return {
    props: {
      servicesSection,
    },
  };
}
export default services;
