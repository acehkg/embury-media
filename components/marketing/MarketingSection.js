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
    <Section
      py={{ base: '0', lg: '5rem' }}
      direction={{ base: 'column', lg: 'row' }}
      {...rest}
    >
      <DisplayImage
        image={image}
        height={300}
        width={300}
        py='2rem'
        px='4rem'
        order={{ base: 'unset', lg: order }}
      />

      <CopyContainer>
        <Copy
          copy={copy}
          fontSize='1.25rem'
          width={{ base: '100%', lg: '400px', xl: '600px' }}
          textAlign={{ base: 'center', lg: 'unset' }}
          fontSize='1.5rem'
          py='2rem'
        />
      </CopyContainer>
    </Section>
  );
};

export default MarketingSection;
