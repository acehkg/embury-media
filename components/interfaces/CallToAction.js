import Link from 'next/link';
import { Button, Text, Flex } from '@chakra-ui/react';
import { HiArrowNarrowRight } from 'react-icons/hi';
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
        <Flex alignItems='center'>
          <MotionButton
            as='a'
            variant={variant}
            size={size}
            variants={callToAction}
            whileHover='hover'
            whileTap='tap'
          >
            <Text textAlign='center' pr='0.5rem'>
              {text}
            </Text>
          </MotionButton>
          <HiArrowNarrowRight
            color='var(--chakra-colors-brandPink-100)'
            size={40}
          />
        </Flex>
      </Link>
    </MotionBox>
  );
};

export default CallToAction;
