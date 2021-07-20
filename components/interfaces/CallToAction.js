import Link from 'next/link';
import { Box, Button } from '@chakra-ui/react';

const CallToAction = ({ text, variant, size, href, ...rest }) => {
  return (
    <Box {...rest}>
      <Link href={href}>
        <Button as='a' cursor='pointer' variant={variant} size={size}>
          {text}
        </Button>
      </Link>
    </Box>
  );
};

export default CallToAction;
