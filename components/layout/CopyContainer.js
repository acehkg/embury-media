import { Flex } from '@chakra-ui/react';

const CopyContainer = ({ children, ...rest }) => {
  return (
    <Flex direction='column' h='100%' alignItems='center' {...rest}>
      {children}
    </Flex>
  );
};

export default CopyContainer;
