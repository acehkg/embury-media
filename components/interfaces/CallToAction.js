import Link from 'next/link';
import { Button, Text } from '@chakra-ui/react';
import MotionBox from '../animation/MotionBox';
import { motion } from 'framer-motion';
import { callToAction } from '../animation/Animations';

const MotionButton = motion(Button);

const CallToAction = ({
  text,
  variant,
  size,
  href,
  children,

  ...rest
}) => {
  return (
    <MotionBox {...rest}>
      <Link href={href}>
        <MotionButton
          as='a'
          variant={variant}
          size={size}
          variants={callToAction}
          whileHover='hover'
          whileTap='tap'
        >
          <Text textAlign='center'>{text}</Text>
          {children}
        </MotionButton>
      </Link>
    </MotionBox>
  );
};

export default CallToAction;
