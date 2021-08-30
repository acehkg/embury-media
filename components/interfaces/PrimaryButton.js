import Link from 'next/link';
import { Button, Text } from '@chakra-ui/react';
import MotionBox from '../animation/MotionBox';
import { motion } from 'framer-motion';
import { primaryButton } from '../animation/Animations';

const MotionButton = motion(Button);

const PrimaryButton = ({
  text,
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
          cursor='pointer'
          variant='primary'
          size={size}
          variants={primaryButton}
          whileHover='hover'
        >
          <Text textAlign='center'>{text}</Text>
          {children}
        </MotionButton>
      </Link>
    </MotionBox>
  );
};

export default PrimaryButton;
