import Image from 'next/image';
import { urlFor } from '../../utils/sanity';

const SanityImage = ({ width, height, image }) => {
  const src = urlFor(image).width(width).height(height).auto('format').url();
  return (
    <Image
      height={height}
      width={width}
      src={src}
      alt={image.alt}
      layout='responsive'
    />
  );
};

export default SanityImage;
