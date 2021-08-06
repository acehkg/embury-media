import { Box } from '@chakra-ui/react';
const DisplayLarge = ({ children, ...rest }) => {
  return (
    <Box display={{ base: 'none', lg: 'block' }} {...rest}>
      {children}
    </Box>
  );
};

export default DisplayLarge;
