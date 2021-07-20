import { Container } from '@chakra-ui/react';
import { PortableText } from '../../utils/sanity';

const HeroCopy = ({ copy, fontSize, maxW, ...rest }) => {
  return (
    <Container textAlign='center' fontSize={fontSize} maxW={maxW} {...rest}>
      <PortableText blocks={copy} />
    </Container>
  );
};

export default HeroCopy;
