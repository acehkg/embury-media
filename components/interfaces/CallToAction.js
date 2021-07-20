import Link from 'next/link';
import { Box, Button, Text } from '@chakra-ui/react';

const CallToAction = ({ text, variant, size, href, children, ...rest }) => {
  return (
    <Box {...rest}>
      <Link href={href}>
        <Button as='a' cursor='pointer' variant={variant} size={size}>
          <Text pr='1rem'>{text}</Text>
          {children}
        </Button>
      </Link>
    </Box>
  );
};

export default CallToAction;
