import Section from '../layout/Section';
import { Heading, Box } from '@chakra-ui/react';
import { PortableText } from '../../utils/sanity';

const OtherService = ({ service }) => {
  if (service.copy === undefined) {
    return null;
  }

  return (
    <Section direction='column' pb='2rem'>
      <Heading as='h2' fontSize='1.5rem' pb='2rem'>
        {service.title}
      </Heading>
      <Box fontSize={{ base: '1.25rem', lg: '1,5rem' }} lineHeight='1.8'>
        <PortableText blocks={service.copy} />
      </Box>
    </Section>
  );
};

export default OtherService;
