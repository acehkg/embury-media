import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex);
const CopyContainer = ({ children, ...rest }) => {
  return (
    <MotionFlex direction='column' h='100%' alignItems='center' {...rest}>
      {children}
    </MotionFlex>
  );
};

export default CopyContainer;
