import { Container } from '@chakra-ui/react';
import { PortableText } from '../../utils/sanity';

const Copy = ({ copy, fontSize, width, ...rest }) => {
  return (
    <Container p='0' fontSize={fontSize} width={width} {...rest}>
      <PortableText blocks={copy} />
    </Container>
  );
};

export default Copy;
