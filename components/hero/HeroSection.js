import { Heading, Image, Box, Button } from '@chakra-ui/react';
import { HiArrowNarrowDown } from 'react-icons/hi';
import Section from '../layout/Section';
import DisplayImage from '../images/DisplayImage';
import MotionBox from '../animation/MotionBox';
import { arrowDown } from '../animation/Animations';
import { urlFor } from '../../utils/sanity';

const HeroSection = ({ heroSection, ...rest }) => {
  const { image, copy } = heroSection;

  const src = urlFor(image).auto('format').url();
  return (
    <Box position='relative' h={{ base: 'unset', xl: '72vh' }}>
      <Section direction={{ base: 'column' }} w='80%' mx='auto' {...rest}>
        <Image
          src='/images/mobile-headline.svg'
          alt='You Imagine We Create'
          display={{ lg: 'none' }}
          w={{ base: '100%', md: '60%' }}
          pb='4rem'
        />
        <Image
          src='/images/headline.svg'
          alt='You Imagine We Create'
          display={{ base: 'none', lg: 'block' }}
          w={{ lg: '55%', xl: '70%' }}
          pb='4rem'
        />
        <Heading
          as='h1'
          fontSize={{ base: '2rem', xl: '2.5rem' }}
          pb={{ base: '4rem' }}
          width={{ md: '50%' }}
        >
          {copy}
        </Heading>
        <MotionBox
          initial='hidden'
          animate='visible'
          variants={arrowDown}
          fontSize='2.5rem'
          pb='2rem'
        >
          <HiArrowNarrowDown />
        </MotionBox>
      </Section>
      <DisplayImage
        image={image}
        height={image.height}
        width={image.width}
        display={{ base: 'block', md: 'none' }}
      />
      <Box
        position='absolute'
        display={{ base: 'none', md: 'block' }}
        w={{ base: '50%', xl: '40%' }}
        right='0'
        bottom='0'
      >
        <img src={src} alt={image.alt} />
      </Box>
    </Box>
  );
};

export default HeroSection;
