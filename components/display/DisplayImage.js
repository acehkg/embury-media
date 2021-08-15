import SanityImage from '../images/SanityImage';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const DisplayImage = ({ image, width, height, ...rest }) => {
  return (
    <MotionBox w='100%' height='100%' {...rest}>
      <SanityImage width={width} height={height} image={image} />
    </MotionBox>
  );
};

export default DisplayImage;
