import { Flex } from '@chakra-ui/react';

const FormCard = ({ children, ...rest }) => {
  return (
    <Flex
      direction='column'
      justifyContent='space-between'
      height='100%'
      width={{ base: '80%', md: '50%' }}
      mx='auto'
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default FormCard;
