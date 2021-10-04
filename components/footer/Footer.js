import { HStack, VStack, Box, Text, Link, Stack } from '@chakra-ui/react';
import EmailButton from '../interfaces/EmailButton';
import WhatsAppButton from '../interfaces/WhatsAppButton';
import { HiExternalLink } from 'react-icons/hi';
const Footer = () => {
  return (
    <Box
      borderColor='brandBlue.100'
      borderTop=' 2px solid'
      w='100%'
      py='2rem'
      mt='6rem'
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing='20%'
        w='80%'
        mx='auto'
        justify='center'
      >
        <VStack>
          <EmailButton
            aria-label='Email Us'
            variant='icon'
            size='icon'
            iconSize={32}
            href='mailto:andrew@theuncommonspirit.com'
          />
          <Text>Email Us</Text>
        </VStack>
        <VStack>
          <WhatsAppButton
            aria-label='Send us a WhatsApp Message'
            variant='icon'
            size='icon'
            iconSize={32}
            href='https://wa.me/85251958370'
          />
          <Text>WhatsApp</Text>
        </VStack>
        <HStack spacing='.25rem' justify='center'>
          <Text>Privacy friendly analytics by</Text>
          <Link href='https://plausible.io' isExternal>
            Plausible
          </Link>
          <HiExternalLink />
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
