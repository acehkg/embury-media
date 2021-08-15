import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import SanityImage from '../images/SanityImage';

import MotionBox from '../animation/MotionBox';
import Section from '../layout/Section';

import {
  slideLeft,
  slideRight,
  slideDown,
  slideUp,
} from '../animation/Animations';

const HighlightImages = ({ images }) => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  const controls = useAnimation();

  useEffect(() => {
    if (inView === true) {
      controls.start('visible');
    }
  }, [inView]);
  return (
    <Section ref={ref} initial='hidden' animate={controls} variants={slideLeft}>
      {images.map((image, index) => {
        return (
          <MotionBox
            height='100%'
            width='100%'
            key={index}
            variants={slideDown}
          >
            <SanityImage image={image} height={300} width={300} />
          </MotionBox>
        );
      })}
    </Section>
  );
};

export default HighlightImages;
