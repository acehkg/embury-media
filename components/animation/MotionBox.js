import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const MotionContainer = motion(Box);

const MotionBox = React.forwardRef(({ children, ...rest }, ref) => {
  return (
    <MotionContainer ref={ref} {...rest}>
      {children}
    </MotionContainer>
  );
});

export default MotionBox;
