import { Box } from '@chakra-ui/react';

import Section from '../layout/Section';
import CopyContainer from '../layout/CopyContainer';
import Copy from '../display/Copy';
import DisplayImage from '../display/DisplayImage';

import { isEven } from '../../utils/helpers';

const MarketingSection = ({ marketingSection, index, ...rest }) => {
  const { copy, image } = marketingSection;
  const evenOrOdd = isEven(index);
  let order;
  evenOrOdd ? (order = 1) : (order = 0);
  return (
    <Section py={{ base: '0', xl: '5rem' }} {...rest}>
      <DisplayImage
        image={image}
        height={300}
        width={300}
        py='2rem'
        px='4rem'
        order={{ base: 'unset', xl: order }}
      />

      <CopyContainer>
        <Copy
          copy={copy}
          fontSize='1.25rem'
          width={{ base: '100%', xl: '600px' }}
          textAlign={{ base: 'center', xl: 'unset' }}
          fontSize='1.5rem'
          py='2rem'
        />
      </CopyContainer>
    </Section>
  );
};

export default MarketingSection;
