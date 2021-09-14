import { Box } from '@chakra-ui/layout';
import { CgMenuRightAlt } from 'react-icons/cg';

const MenuToggle = ({ onOpen, color, ...rest }) => {
  return (
    <Box
      tabIndex='0'
      as='button'
      aria-label='Open Nav Menu'
      onClick={onOpen}
      _focus={{ outlineColor: 'blue.200' }}
      {...rest}
    >
      <CgMenuRightAlt size={32} color={color} />
    </Box>
  );
};

export default MenuToggle;
