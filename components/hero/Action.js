import { Flex } from '@chakra-ui/react';
import { FaArrowDown } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

import CallToAction from '../interfaces/CallToAction';
import ScrollButton from '../interfaces/ScrollButton';

const Action = ({ textOne, textTwo, hrefOne, hrefTwo, ...rest }) => {
  return (
    <Flex {...rest}>
      <CallToAction
        href={hrefOne}
        text={textOne}
        variant='primary'
        size='desktop'
        py='2rem'
      />
      <ScrollButton target='0' direction='down' text={textTwo} size='desktop' />
    </Flex>
  );
};

export default Action;
