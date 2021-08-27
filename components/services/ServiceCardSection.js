import { SimpleGrid, Heading } from '@chakra-ui/react';
import Section from '../layout/Section';
import ServiceCard from './ServiceCard';

const ServiceCardSection = ({ services, headline, ...rest }) => {
  return (
    <Section direction='column'>
      <Heading as='h2' fontSize='2rem' textAlign='center' pb='2rem'>
        {headline}
      </Heading>
      <SimpleGrid
        minChildWidth='300px'
        spacing='2rem'
        w='90%'
        mx='auto'
        {...rest}
      >
        {services.map((service) => {
          return <ServiceCard key={service._id} service={service} />;
        })}
      </SimpleGrid>
    </Section>
  );
};

export default ServiceCardSection;
