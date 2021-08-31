import groq from 'groq';
import { sanityClient } from '../utils/sanity';
import { SimpleGrid } from '@chakra-ui/react';
import useServices from '../hooks/useServices';

import TransitionWrapper from '../components/layout/TransitionWrapper';
import PageWrapper from '../components/layout/PageWrapper';
import ServiceCardLarge from '../components/services/ServiceCardLarge';

const services = ({ services }) => {
  const { sortedServices, servicesLoading } = useServices(services);

  if (servicesLoading == true) {
    return null;
  }
  console.log(sortedServices);
  return (
    <TransitionWrapper>
      <SimpleGrid
        minChildWidth='300px'
        spacing='2rem'
        w='80%'
        mx='auto'
        pb='2rem'
      >
        {services.map((service) => {
          return <ServiceCardLarge key={service._id} service={service} />;
        })}
      </SimpleGrid>
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
