import LinkButton from '../interfaces/LinkButton';
import { Flex, Text } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

const ServicesLinks = ({ services }) => {
  return (
    <div>
      {services.map((service) => {
        return (
          <LinkButton
            key={service._id}
            href={`/services/${service.slug.current}`}
            variant='icon'
            pb='1rem'
          >
            <Flex w='100%' justifyContent='space-between' alignItems='center'>
              <Text fontSize='1.5rem' fontWeight='bold'>
                {service.title}
              </Text>
              <FaArrowRight size={24} />
            </Flex>
          </LinkButton>
        );
      })}
    </div>
  );
};

export default ServicesLinks;
