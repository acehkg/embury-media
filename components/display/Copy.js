import { Box } from '@chakra-ui/react';
import { PortableText } from '../../utils/sanity';

const Copy = ({ copy, ...rest }) => {
  return (
    <Box p='0' {...rest}>
      <PortableText blocks={copy} />
    </Box>
  );
};

export default Copy;
