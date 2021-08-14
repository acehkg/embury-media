import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const MotionContainer = motion(Box);

const MotionBox = ({ children, ...rest }) => {
  return <MotionContainer {...rest}>{children}</MotionContainer>;
};

export default MotionBox;
