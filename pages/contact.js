import { Flex, Heading } from '@chakra-ui/react';

import ContactMe from '../components/forms/ContactMe';
import EmailButton from '../components/interfaces/EmailButton';
import WhatsAppButton from '../components/interfaces/WhatsAppButton';

const contact = () => {
  return (
    <>
      <Heading textAlign='center' fontSize='1.5rem'>
        CONTACT US
      </Heading>
      <Flex
        width={{ base: '80%', lg: '50%' }}
        mx='auto'
        justifyContent='space-evenly'
        py='2rem'
      >
        <EmailButton
          variant='icon'
          size='icon'
          iconSize={32}
          href='mailto:andrewembury@me.com'
        />
        <WhatsAppButton
          variant='icon'
          size='icon'
          iconSize={32}
          href='https://wa.me/85251958370'
        />
      </Flex>
      <ContactMe pb='2rem' />
    </>
  );
};

export default contact;
