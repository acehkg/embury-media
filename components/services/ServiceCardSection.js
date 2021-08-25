import { SimpleGrid } from '@chakra-ui/react';
import Section from '../layout/Section';
import ServiceCard from './ServiceCard';

const ServiceCardSection = ({ services, ...rest }) => {
  return (
    <Section>
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
