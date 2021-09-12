import { urlFor } from '../../utils/sanity';
import { Image, Box } from '@chakra-ui/react';

const SanityIcon = ({ image }) => {
  const src = urlFor(image).auto('format').url();

  return (
    <Image
      display='inline'
      height={{ base: 75, md: 100 }}
      width={{ base: 75, md: 100 }}
      src={src}
    />
  );
};

export default SanityIcon;
