import { Flex, Box, HStack } from '@chakra-ui/react';
import NavLink from './NavLink';

const DesktopNav = ({ spacing, ...rest }) => {
  return (
    <Box {...rest}>
      <HStack as='nav' w='50%' spacing={spacing}>
        <NavLink href='/projects' title='PROJECTS' />
        <NavLink href='/about' title='ABOUT' />
        <NavLink href='/contact' title='CONTACT' color='brandPink.100' />
      </HStack>
    </Box>
  );
};

export default DesktopNav;
