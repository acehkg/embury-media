import { useEffect, useState } from 'react';
import Section from '../layout/Section';
import CopyContainer from '../layout/CopyContainer';
import Copy from '../display/Copy';
import DisplayImage from '../images/DisplayImage';

import { isEven } from '../../utils/helpers';

import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

import { fadeIn, slideDown, slideUp } from '../animation/Animations';

const MarketingSection = ({ marketingSection, index, ...rest }) => {
  const { copy, image } = marketingSection;
  const [ref, inView] = useInView({ threshold: 0.2 });
  const controls = useAnimation();
  const [order, setOrder] = useState(1);

  useEffect(() => {
    const evenOrOdd = isEven(index);
    evenOrOdd ? setOrder(1) : setOrder(0);
  }, []);

  useEffect(() => {
    if (inView === true) {
      controls.start('visible');
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <Section
        id={index}
        py={{ base: '0', lg: '5rem' }}
        direction={{ base: 'column', lg: 'row' }}
        initial='hidden'
        animate={controls}
        variants={fadeIn}
        {...rest}
      >
        <DisplayImage
          variants={slideDown}
          image={image}
          height={300}
          width={300}
          py='2rem'
          px='4rem'
          order={{ base: 'unset', lg: order }}
        />

        <CopyContainer variants={slideUp}>
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
    </div>
  );
};

export default MarketingSection;
