import Link from 'next/link';
import { Box, Image } from '@chakra-ui/react';
const Logo = ({ ...rest }) => {
  return (
    <Link href='/'>
      <Box as='a' {...rest}>
        <Image
          role='link'
          height='auto'
          width='5rem'
          src='/images/new-logo.png'
          alt='Embury Media Logo'
        />
      </Box>
    </Link>
  );
};

export default Logo;
