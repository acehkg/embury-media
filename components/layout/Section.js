import React from 'react';
import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex);
const Section = React.forwardRef(({ children, ...rest }, ref) => {
  return (
    <MotionFlex ref={ref} as='section' width='100%' {...rest}>
      {children}
    </MotionFlex>
  );
});

export default Section;
