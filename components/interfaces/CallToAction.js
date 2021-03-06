import Link from 'next/link';
import { Button, Text, Flex } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import MotionBox from '../animation/MotionBox';
import { motion } from 'framer-motion';
import { callToAction, ctaArrow } from '../animation/Animations';

const MotionButton = motion(Button);
const ArrowBox = motion(Flex);

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
            aria-label={text}
            role='button'
            tabIndex='0'
            _hover={{ textDecoration: 'none' }}
            as={ChakraLink}
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
          <ArrowBox>
            <HiArrowNarrowRight
              color='var(--chakra-colors-brandPink-100)'
              size={40}
            />
          </ArrowBox>
        </Flex>
      </Link>
    </MotionBox>
  );
};

export default CallToAction;
