import Section from '../layout/Section';
import CopyContainer from '../layout/CopyContainer';
import HeadLine from '../display/HeadLine';
import Copy from '../display/Copy';
import DisplayImage from '../display/DisplayImage';
import CallToAction from '../interfaces/CallToAction';
import Action from '../hero/Action';

import { useCallToAction } from '../../hooks/useCallToAction';

const HeroSection = ({ heroSection, callToAction, ...rest }) => {
  const { image, headline, copy } = heroSection;

  const primary = useCallToAction(callToAction, 'Hero Primary');
  const secondary = useCallToAction(callToAction, 'Hero Secondary');

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
          href='/services'
          text={primary.copy}
          variant={primary.buttonVariant}
          py='2rem'
        />
        <Action
          d={{ base: 'none', lg: 'flex' }}
          textOne={primary.copy}
          textTwo={secondary.copy}
          hrefOne='/services'
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
