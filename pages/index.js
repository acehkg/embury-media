import { Flex, Text } from '@chakra-ui/react';

const index = () => {
  return (
    <Flex
      h='500px'
      w='500px'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
      mx='auto'
    >
      <Text size='xl' color='red.500'>
        NEXT-CHAKRA-UI
      </Text>
    </Flex>
  );
};

export default index;
