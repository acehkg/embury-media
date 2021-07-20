import { Flex } from '@chakra-ui/react';
import { FaArrowDown } from 'react-icons/fa';
import CallToAction from '../interfaces/CallToAction';

const Action = ({ textOne, textTwo, hrefOne, hrefTwo, ...rest }) => {
  return (
    <Flex {...rest}>
      <CallToAction
        href={hrefOne}
        text={textOne}
        variant='callToAction'
        size='desktop'
        py='2rem'
      />
      <CallToAction
        href={hrefTwo}
        text={textTwo}
        variant='learnMore'
        py='2rem'
        size='desktop'
      >
        {<FaArrowDown />}
      </CallToAction>
    </Flex>
  );
};

export default Action;
