import { Box } from '@chakra-ui/layout';
import { CgMenuRightAlt } from 'react-icons/cg';

const MenuToggle = ({ onOpen, color, ...rest }) => {
  return (
    <Box aria-label='Open Nav Menu' onClick={onOpen} {...rest}>
      <CgMenuRightAlt size={32} color={color} />
    </Box>
  );
};

export default MenuToggle;
