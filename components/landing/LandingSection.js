import Section from '../layout/Section';
import Copy from '../display/Copy';
import CallToAction from '../interfaces/CallToAction';
import DisplayImage from '../images/DisplayImage';
import { Heading } from '@chakra-ui/react';

const LandingSection = ({
  copy,
  index,
  callToAction,
  colorDesignToken,
  sectionImage,
  headline,
  ...rest
}) => {
  const isBlue = colorDesignToken;

  return (
    <Section py='2rem' direction='column' {...rest}>
      {sectionImage ? (
        <DisplayImage
          maxW='750px'
          w='90%'
          mx='auto'
          py='5rem'
          height={sectionImage.height}
          width={sectionImage.width}
          image={sectionImage}
        />
      ) : null}
      {headline ? (
        <Heading
          as='h1'
          fontSize={{ base: '2rem', lg: '3rem' }}
          pb='2rem'
          w='80%'
          mx='auto'
          textAlign='center'
        >
          {headline}
        </Heading>
      ) : null}
      <Copy
        w='90%'
        p='5%'
        mx='auto'
        fontSize='1.5rem'
        // bg={isBlue ? 'brandBlue.300' : 'brandBlue.200'}
        borderRadius='base'
        //color={isBlue ? 'brandGrey.100' : 'brandBlue.100'}
        copy={copy}
      />
      {callToAction?.buttonText ? (
        <CallToAction
          w='80%'
          mx='auto'
          mt='3rem'
          size='normal'
          href={`/${callToAction.link}`}
          variant='ctaLight'
          text={callToAction.buttonText}
        />
      ) : null}
    </Section>
  );
};

export default LandingSection;
