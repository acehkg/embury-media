import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex);
const CopyContainer = ({ children, ...rest }) => {
  return <MotionFlex {...rest}>{children}</MotionFlex>;
};

export default CopyContainer;
