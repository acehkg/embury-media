import { useState, useEffect } from 'react';

const useSectionImages = (sections) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageArray = sections.map(({ image }) => {
      return image;
    });
    setImages(imageArray);
  }, []);
  return { images };
};
export default useSectionImages;
