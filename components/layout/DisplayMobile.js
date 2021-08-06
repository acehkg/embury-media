import { Box } from '@chakra-ui/react';
const DisplayMobile = ({ children, ...rest }) => {
  return (
    <Box display={{ lg: 'none' }} {...rest}>
      {children}
    </Box>
  );
};

export default DisplayMobile;
