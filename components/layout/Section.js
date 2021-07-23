import { Flex } from '@chakra-ui/react';

const Section = ({ children, ...rest }) => {
  return (
    <Flex
      as='section'
      width='80%'
      mx='auto'
      justifyContent='space-evenly'
      alignItems='center'
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default Section;