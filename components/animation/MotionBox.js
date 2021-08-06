import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const MotionContainer = motion(Box);

const MotionBox = ({ children }) => {
  return <MotionContainer>{children}</MotionContainer>;
};

export default MotionBox;
