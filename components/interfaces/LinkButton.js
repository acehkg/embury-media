import Link from 'next/link';
import { Link as ChakraLink, Box } from '@chakra-ui/react';

const LinkButton = ({ href, children, ...rest }) => {
  if (href === undefined) {
    return null;
  }
  return (
    <Link href={href} passHref>
      <Box {...rest}>
        <ChakraLink
          as='a'
          _hover={{
            textDecoration: 'none',
          }}
          {...rest}
        >
          {children}
        </ChakraLink>
      </Box>
    </Link>
  );
};

export default LinkButton;
