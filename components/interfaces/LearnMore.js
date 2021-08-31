import Link from 'next/link';
import { Button, Text } from '@chakra-ui/react';
import MotionBox from '../animation/MotionBox';
import { motion } from 'framer-motion';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { arrowRight } from '../animation/Animations';

const MotionButton = motion(Button);

const LearnMore = ({
  text,
  size,
  href,
  children,

  ...rest
}) => {
  return (
    <MotionBox {...rest}>
      <Link href={href}>
        <MotionButton variant='learnMore' size={size}>
          <Text textAlign='center' pr='0.5rem'>
            {text}
          </Text>

          <HiArrowNarrowRight
            size={28}
            color='var(--chakra-colors-brandPink-100)'
          />
        </MotionButton>
      </Link>
    </MotionBox>
  );
};

export default LearnMore;
