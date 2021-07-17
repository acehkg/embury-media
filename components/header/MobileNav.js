import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
} from '@chakra-ui/react';
import NavLink from './NavLink';

const MobileNav = ({ isOpen, onClose, ...rest }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton size='sm' color='brandBlue.100' />
        <DrawerBody>
          <Flex
            as='nav'
            h='100%'
            w='100%'
            direction='column'
            justifyContent='space-evenly'
            alignItems='center'
          >
            <NavLink href='/projects' title='PROJECTS' />
            <NavLink href='/about' title='ABOUT' />
            <NavLink href='/contact' title='CONTACT' color='brandPink.100' />
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
