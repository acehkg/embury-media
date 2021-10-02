import SanityImage from '../images/SanityImage';
import { Flex, Box, Text } from '@chakra-ui/react';

const GuaranteeBlock = ({ image, text }) => {
  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      w='80%'
      mx='auto'
      justify='center'
      align='center'
    >
      <Box width='150px' height='auto'>
        <SanityImage image={image} height={image.height} width={image.width} />
      </Box>
      <Text
        fontSize='1.5rem'
        color='brandPink.100'
        fontWeight='bold'
        textAlign='center'
        w={{ base: '100%', lg: '70%' }}
      >
        {text}
      </Text>
    </Flex>
  );
};

export default GuaranteeBlock;
