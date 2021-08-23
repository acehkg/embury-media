import Section from '../layout/Section';
import Copy from '../display/Copy';
const LandingSection = ({ copy }) => {
  return (
    <Section py='2rem' bg='brandBlue.100'>
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
