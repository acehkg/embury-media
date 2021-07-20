import { Flex, Button } from '@chakra-ui/react';

import HeadLine from './HeadLine';
import HeroCopy from './HeroCopy';
import HeroImage from './HeroImage';
import CallToAction from '../interfaces/CallToAction';

const HeroSection = ({ heroSection, ...rest }) => {
  const { image, headline, copy } = heroSection;
  return (
    <Flex
      direction='column'
      height='100%'
      width='80%'
      mx='auto'
      justifyContent='space-evenly'
      alignItems='center'
      {...rest}
    >
      <HeroImage width={864} height={1080} image={image} pb='2rem' />
      <HeadLine headLine={headline} fontSize='2rem' h='h1' pb='2rem' />
      <HeroCopy copy={copy} h='h2' maxW='container.xl' fontSize='1.5rem' />
      <CallToAction
        href='/contact'
        text='get in touch'
        variant='callToAction'
        py='2rem'
      />
    </Flex>
  );
};

export default HeroSection;
