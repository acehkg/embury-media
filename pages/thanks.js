import groq from 'groq';
import { sanityClient } from '../utils/sanity.server';
import { Box, Text, SimpleGrid, Heading } from '@chakra-ui/react';
import TransitionWrapper from '../components/layout/TransitionWrapper';
import ServiceCard from '../components/services/ServiceCard';
import { useSessionStorage } from '../hooks/useSessionStorage';
const thanks = ({ sanityData }) => {
  const { sortedServices } = sanityData;
  const [value, setValue] = useSessionStorage('firstName');

  return (
    <TransitionWrapper>
      <Box w='80%' mx='auto'>
        <Heading as='h1' fontSize='1.5rem' textAlign='center' py='2rem'>
          Thanks for reaching out {value}.
        </Heading>
        <Text fontSize='1.5rem' textAlign='center'>
          We will be in touch shortly.
        </Text>
        <Text fontSize='1.5rem' textAlign='center' pt='2rem'>
          Read More About Our Services
        </Text>
      </Box>

      <SimpleGrid
        minChildWidth='300px'
        spacing='2rem'
        w='80%'
        mx='auto'
        py='2rem'
      >
        {sortedServices.map((service) => {
          return <ServiceCard key={service._id} service={service} />;
        })}
      </SimpleGrid>
    </TransitionWrapper>
  );
};

const servicesQuery = groq`
*[_type == "services"]
`;

export async function getServerSideProps() {
  const services = await sanityClient.fetch(servicesQuery);
  const sortedServices = services.sort(
    (a, b) => a.sectionOrder - b.sectionOrder
  );

  return {
    props: {
      sanityData: {
        sortedServices,
      },
    },
  };
}
export default thanks;
