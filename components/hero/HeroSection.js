import { Flex } from '@chakra-ui/react';

import HeadLine from './HeadLine';
import HeroCopy from './HeroCopy';
import HeroImage from './HeroImage';
import CallToAction from '../interfaces/CallToAction';
import Action from '../hero/Action';

const HeroSection = ({ heroSection, ...rest }) => {
  const { image, headline, copy } = heroSection;
  return (
    <Flex
      direction={{ base: 'column', xl: 'row' }}
      width='80%'
      mx='auto'
      justifyContent='space-evenly'
      alignItems='center'
      {...rest}
    >
      <HeroImage
        width={864}
        height={1080}
        image={image}
        pb='2rem'
        pl={{ base: '0', xl: '2rem' }}
        order={{ base: '0', xl: '1' }}
      />
      <Flex direction='column' h='100%' alignItems='center' alignSelf='start'>
        <HeadLine
          headLine={headline}
          fontSize={{ base: '2rem', xl: '2.5rem' }}
          h='h1'
          pb={{ base: '2rem', xl: '5rem' }}
          textAlign={{ base: 'center', xl: 'unset' }}
        />
        <HeroCopy
          copy={copy}
          h='h2'
          maxW='container.xl'
          fontSize={{ base: '1.5rem', xl: '1.75rem' }}
          textAlign={{ base: 'center', xl: 'unset' }}
        />
        <CallToAction
          d={{ base: 'block', lg: 'none' }}
          href='/contact'
          text='get in touch'
          variant='callToAction'
          py='2rem'
        />
        <Action
          d={{ base: 'none', lg: 'flex' }}
          textOne='get in touch'
          textTwo='learn more'
          hrefOne='/contact'
          hrefTwo='/'
          w='100%'
          justifyContent='space-between'
          py='5rem'
        />
      </Flex>
    </Flex>
  );
};

export default HeroSection;
