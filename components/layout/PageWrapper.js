import { Box } from '@chakra-ui/react';

const PageWrapper = ({ children }) => {
  return (
    <Box w='80%' mx='auto'>
      {children}
    </Box>
  );
};

export default PageWrapper;
