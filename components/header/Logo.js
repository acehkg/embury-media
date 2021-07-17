import Link from 'next/link';
import { Box, Text } from '@chakra-ui/react';
const Logo = () => {
  return (
    <Link href='/'>
      <Box cursor='pointer'>
        <Text
          role='link'
          fontSize={['1.5rem', '1.5rem', '2rem', '2rem']}
          fontWeight='bold'
        >
          EMBURY MEDIA
        </Text>
      </Box>
    </Link>
  );
};

export default Logo;
