import { Button, Text } from '@chakra-ui/react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const ScrollButton = ({ direction, target, text, size, ...rest }) => {
  return (
    <ScrollLink to={target} smooth='true'>
      <Button variant='icon' size={size} {...rest}>
        <Text pr='1rem'>{text}</Text>
        {direction === 'up' && <FaArrowUp />}
        {direction === 'down' && <FaArrowDown />}
      </Button>
    </ScrollLink>
  );
};

export default ScrollButton;
