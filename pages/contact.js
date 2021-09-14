import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Flex, Heading } from '@chakra-ui/react';

import ContactMe from '../components/forms/ContactMe';
import EmailButton from '../components/interfaces/EmailButton';
import WhatsAppButton from '../components/interfaces/WhatsAppButton';

import TransitionWrapper from '../components/layout/TransitionWrapper';

const contact = () => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY}
    >
      <TransitionWrapper>
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
            aria-label='Email Us'
            variant='icon'
            size='icon'
            iconSize={32}
            href='mailto:andrew@theuncommonspirit.com'
          />
          <WhatsAppButton
            aria-label='Send us a WhatsApp Message'
            variant='icon'
            size='icon'
            iconSize={32}
            href='https://wa.me/85251958370'
          />
        </Flex>
        <ContactMe pb='2rem' />
      </TransitionWrapper>
    </GoogleReCaptchaProvider>
  );
};

export default contact;
