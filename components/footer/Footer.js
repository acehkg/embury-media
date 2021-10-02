import { HStack, Box } from '@chakra-ui/react';
import ScrollButton from '../interfaces/ScrollButton';
import EmailButton from '../interfaces/EmailButton';
import WhatsAppButton from '../interfaces/WhatsAppButton';
const Footer = () => {
  return (
    <Box
      borderColor='brandBlue.100'
      borderTop=' 2px solid'
      w='100%'
      py='2rem'
      mt='6rem'
    >
      <HStack spacing='20%' w='80%' mx='auto' justify='center'>
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
        <ScrollButton direction='up' text='TOP' target='top' p='0' />
      </HStack>
    </Box>
  );
};

export default Footer;
