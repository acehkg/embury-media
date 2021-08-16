import { Flex, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import DisplayImage from '../display/DisplayImage';

const MotionFlex = motion(Flex);
const Slide = ({
  image,
  imageWidth,
  imageHeight,
  title,
  description,
  ...rest
}) => {
  return (
    <MotionFlex
      direction='column'
      justifyContent='center'
      alignItems='center'
      {...rest}
    >
      <DisplayImage image={image} width={imageWidth} height={imageHeight} />
      <Heading>{title}</Heading>
      <Text>{description}</Text>
    </MotionFlex>
  );
};

export default Slide;
