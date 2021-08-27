import Section from '../layout/Section';
import Copy from '../display/Copy';
import { isEven } from '../../utils/helpers';

const LandingSection = ({ copy, index, ...rest }) => {
  const isBlue = isEven(index);
  console.log(copy);
  return (
    <Section
      py='2rem'
      bg={isBlue ? 'brandBlue.100' : 'brandGrey.100'}
      {...rest}
    >
      <Copy
        w='80%'
        mx='auto'
        fontSize='1.5rem'
        color={isBlue ? 'brandGrey.100' : 'brandBlue.100'}
        copy={copy}
      />
    </Section>
  );
};

export default LandingSection;
