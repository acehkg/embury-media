import { Link as NextLink } from 'next/link';
import { Link, Text } from '@chakra-ui/react';

const NavLink = ({ href, title, ...rest }) => {
  return (
    <Link
      as={NextLink}
      href={href}
      _hover={{
        textDecoration: 'none',
        transform: 'scale(1.1)',
        transition: '0.1s all ease-in-out',
      }}
    >
      <Text {...rest}>{title}</Text>
    </Link>
  );
};

export default NavLink;
