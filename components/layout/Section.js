import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex);
const Section = ({ children, ...rest }) => {
  return (
    <MotionFlex
      as='section'
      width='100%'
      mx='auto'
      justifyContent='space-evenly'
      alignItems='center'
      {...rest}
    >
      {children}
    </MotionFlex>
  );
};

export default Section;
