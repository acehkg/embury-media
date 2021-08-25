import Section from '../layout/Section';
import Copy from '../display/Copy';
const LandingSection = ({ copy, ...rest }) => {
  return (
    <Section py='2rem' bg='brandBlue.100' {...rest}>
      <Copy
        w='80%'
        mx='auto'
        fontSize='1.5rem'
        color='brandGrey.100'
        copy={copy}
      />
    </Section>
  );
};

export default LandingSection;
