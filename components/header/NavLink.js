import Link from 'next/link';
import { Link as ChakraLink, Text } from '@chakra-ui/react';

const NavLink = ({ href, title, ...rest }) => {
  return (
    <Link href={href} passHref>
      <ChakraLink
        as='a'
        _hover={{
          textDecoration: 'none',
          transform: 'scale(1.1)',
          transition: '0.1s all ease-in-out',
        }}
      >
        <Text {...rest}>{title}</Text>
      </ChakraLink>
    </Link>
  );
};

export default NavLink;
