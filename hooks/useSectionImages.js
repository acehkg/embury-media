import { useState, useEffect } from 'react';
import { urlFor } from '../utils/sanity';

const useSectionImages = (sections) => {
  const [images, setImages] = useState([]);
  const [urlArray, setUrlArray] = useState([]);
  useEffect(() => {
    const imageArray = sections.map(({ image }) => {
      return image;
    });
    setImages(imageArray);
  }, []);

  useEffect(() => {
    const uArray = sections.map(({ image }) => {
      const src = urlFor(image).auto('format').url();
      return src;
    });
    setUrlArray(uArray);
  }, [images]);
  return { images, urlArray };
};
export default useSectionImages;
