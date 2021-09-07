import SanityImage from './SanityImage';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const BlockImage = ({ image, width, height, ...rest }) => {
  return (
    <MotionBox
      maxW={{ base: '280px', lg: '500px' }}
      height='auto'
      mx='auto'
      {...rest}
    >
      <SanityImage width={width} height={height} image={image} />
    </MotionBox>
  );
};

export default BlockImage;
