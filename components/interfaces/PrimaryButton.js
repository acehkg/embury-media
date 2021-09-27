import Link from 'next/link';
import { Button, Text } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import MotionBox from '../animation/MotionBox';
import { motion } from 'framer-motion';
import { primaryButton } from '../animation/Animations';

const MotionButton = motion(Button);

const PrimaryButton = ({
  text,
  size,
  href,
  variant,
  children,

  ...rest
}) => {
  return (
    <MotionBox {...rest}>
      <Link href={href}>
        <MotionButton
          role='button'
          as={ChakraLink}
          _hover={{ textDecoration: 'none' }}
          tabIndex='0'
          variant={variant}
          size={size}
          variants={primaryButton}
          //whileHover='hover'
          whileTap='tap'
        >
          <Text textAlign='center'>{text}</Text>
          {children}
        </MotionButton>
      </Link>
    </MotionBox>
  );
};

export default PrimaryButton;
