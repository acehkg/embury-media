import { Flex } from '@chakra-ui/react';

import Section from '../layout/Section';
import CopyContainer from '../layout/CopyContainer';
import HeadLine from '../display/HeadLine';
import Copy from '../display/Copy';
import DisplayImage from '../display/DisplayImage';
import CallToAction from '../interfaces/CallToAction';
import Action from '../hero/Action';

const HeroSection = ({ heroSection, ...rest }) => {
  const { image, headline, copy } = heroSection;

  return (
    <Section direction={{ base: 'column', xl: 'row' }} {...rest}>
      <DisplayImage
        width={864}
        height={1080}
        image={image}
        pb='2rem'
        pl={{ base: '0', xl: '2rem' }}
        order={{ base: '0', xl: '1' }}
      />
      <CopyContainer>
        <HeadLine
          headLine={headline}
          fontSize={{ base: '2rem', xl: '2.5rem' }}
          h='h1'
          pb={{ base: '2rem', xl: '5rem' }}
          textAlign={{ base: 'center', xl: 'unset' }}
        />
        <Copy
          copy={copy}
          width='100%'
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
          alignItems='center'
        />
      </CopyContainer>
    </Section>
  );
};

export default HeroSection;
