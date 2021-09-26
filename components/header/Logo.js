import Link from 'next/link';
import { Box, Image } from '@chakra-ui/react';
const Logo = ({ ...rest }) => {
  return (
    <Link href='/'>
      <Box as='a' {...rest}>
        <Image
          display={{ base: 'none', md: 'block' }}
          role='link'
          height='auto'
          width='12rem'
          src='/images/full-logo.png'
          alt='Embury Media Logo'
        />
        <Image
          display={{ base: 'block', md: 'none' }}
          role='link'
          height='auto'
          width='5rem'
          src='/images/icon.png'
          alt='Embury Media Logo'
        />
      </Box>
    </Link>
  );
};

export default Logo;
