import { Heading, Flex, Image } from '@chakra-ui/react';
import DisplayMobile from '../layout/DisplayMobile';
import Section from '../layout/Section';
import Copy from '../display/Copy';
import DisplayImage from '../images/DisplayImage';
import CallToAction from '../interfaces/CallToAction';
import Action from '../hero/Action';

import { useCallToAction } from '../../hooks/useCallToAction';

const HeroSection = ({ heroSection, ...rest }) => {
  const { image, copy } = heroSection;

  return (
    <Section direction={{ base: 'column', xl: 'row' }} {...rest}>
      <DisplayMobile pb='4rem'>
        <Image src='/images/mobile-headline.svg' alt='You Imagine We Create' />
      </DisplayMobile>
      <Heading
        as='h1'
        fontSize={{ base: '2rem', xl: '2.5rem' }}
        pb={{ base: '4rem', xl: '5rem' }}
      >
        {copy}
      </Heading>
      <DisplayImage
        position='absolute'
        bottom='-100%'
        left='0'
        width={image.width}
        height={image.height}
        image={image}
      />

      {/*   <Flex
        direction='column'
        justifyContent='space-between'
        alignItems='center'
      >
        <Heading
          as='h1'
          fontSize={{ base: '2rem', xl: '2.5rem' }}
          pb={{ base: '2rem', xl: '5rem' }}
          textAlign={{ base: 'center', xl: 'unset' }}
        >
          {headline}
        </Heading>
        <Copy
          copy={copy}
          width='100%'
          fontSize={{ base: '1.5rem', xl: '1.75rem' }}
          textAlign={{ base: 'center', xl: 'unset' }}
        />
      </Flex> */}
    </Section>
  );
};

export default HeroSection;
