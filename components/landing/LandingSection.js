import Section from '../layout/Section';
import Copy from '../display/Copy';
//import CallToAction from '../interfaces/CallToAction';
import DisplayImage from '../images/DisplayImage';
import CallToActionBox from './CallToActionBox';
import GuaranteeBlock from './GuaranteeBlock';
//import { Heading } from '@chakra-ui/react';

const LandingSection = ({
  copy,
  index,
  callToAction,
  colorDesignToken,
  sectionImage,
  headline,
  guaranteeBlock,
  ...rest
}) => {
  const isBlue = colorDesignToken;

  return (
    <Section direction='column' {...rest}>
      {sectionImage ? (
        <DisplayImage
          maxW={{ base: '500px', xl: '700px' }}
          w='80%'
          mx='auto'
          pt={{ base: '6rem', lg: '15%' }}
          pb={{ base: '5rem', lg: '15%' }}
          height={sectionImage.height}
          width={sectionImage.width}
          image={sectionImage}
        />
      ) : null}
      {/* {headline ? (
        <Heading
          as='h2'
          fontSize={{ base: '2rem', lg: '2.5rem' }}
          pb='2rem'
          w='80%'
          mx='auto'
          textAlign='center'
        >
          {headline}
        </Heading>
      ) : null} */}
      <Copy
        w='80%'
        pb={{ base: '5rem', lg: '5%' }}
        mx='auto'
        fontSize='1.5rem'
        // bg={isBlue ? 'brandBlue.300' : 'brandBlue.200'}
        borderRadius='base'
        //color={isBlue ? 'brandGrey.100' : 'brandBlue.100'}
        copy={copy}
      />
      {/*  {callToAction?.buttonText ? (
        <CallToAction
          w='80%'
          mx='auto'
          mb='5rem'
          size='normal'
          href={`/${callToAction.link}`}
          variant='ctaLight'
          text={callToAction.buttonText}
        />
      ) : null} */}
      {guaranteeBlock?.hasGuarantee ? (
        <GuaranteeBlock
          image={guaranteeBlock.guaranteeImage}
          text={guaranteeBlock.guaranteeText}
        />
      ) : null}
      {callToAction?.hasCta ? (
        <CallToActionBox callToAction={callToAction} />
      ) : null}
    </Section>
  );
};

export default LandingSection;
