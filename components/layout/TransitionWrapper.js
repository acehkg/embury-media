import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const MotionBox = motion(Box);

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const TransitionWrapper = ({ children }) => {
  return (
    <MotionBox
      variants={variants} // Pass the variant object into Framer Motion
      initial='hidden' // Set the initial state to variants.hidden
      animate='enter' // Animated state to variants.enter
      exit='exit' // Exit state (used later) to variants.exit
      transition={{ ease: 'easeInOut' }} // Set the transition to linear
    >
      {children}
    </MotionBox>
  );
};

export default TransitionWrapper;
