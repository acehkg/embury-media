import { Text, Box } from '@chakra-ui/react';

const HeadLine = ({ headLine, fontSize, h, ...rest }) => {
  return (
    <Box textAlign='center' {...rest}>
      <Text as={h} fontSize={fontSize} fontWeight='bold'>
        {headLine}
      </Text>
    </Box>
  );
};

export default HeadLine;
