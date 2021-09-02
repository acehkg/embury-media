import Section from '../layout/Section';
import Copy from '../display/Copy';
import { isEven } from '../../utils/helpers';
import CallToAction from '../interfaces/CallToAction';

const LandingSection = ({ copy, index, callToAction, ...rest }) => {
  const isBlue = isEven(index);
  return (
    <Section
      py='2rem'
      bg={isBlue ? 'brandBlue.100' : 'brandGrey.100'}
      direction='column'
      {...rest}
    >
      <Copy
        w='80%'
        mx='auto'
        fontSize='1.5rem'
        color={isBlue ? 'brandGrey.100' : 'brandBlue.100'}
        copy={copy}
      />
      {callToAction ? (
        <CallToAction
          w='80%'
          mx='auto'
          size='medium'
          href={`/${callToAction.link}`}
          variant={isBlue ? 'ctaDark' : 'ctaLight'}
          text={callToAction.buttonText}
        />
      ) : null}
    </Section>
  );
};

export default LandingSection;
