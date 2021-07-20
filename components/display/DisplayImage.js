import SanityImage from '../SanityImage';
import { Box } from '@chakra-ui/react';

const DisplayImage = ({ image, width, height, ...rest }) => {
  return (
    <Box w='100%' height='100%' {...rest}>
      <SanityImage width={width} height={height} image={image} />
    </Box>
  );
};

export default DisplayImage;
