import { urlFor } from '../../utils/sanity';
import { Image, Box } from '@chakra-ui/react';

const SanityIcon = ({ image }) => {
  const src = urlFor(image).auto('format').url();

  return <Image display='inline' height={50} width={50} src={src} />;
};

export default SanityIcon;
