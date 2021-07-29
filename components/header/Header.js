import { useDisclosure, Flex } from '@chakra-ui/react';
import DesktopNav from './DesktopNav';
import Logo from './Logo';
import MenuToggle from './MenuToggle';
import MobileNav from './MobileNav';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        id='top'
        as='header'
        w='80%'
        justifyContent='space-between'
        alignItems='center'
        //px='2rem'
        mx='auto'
        pt='2rem'
      >
        <Logo />
        <DesktopNav d={{ base: 'none', xl: 'block' }} spacing='8rem' />
        <MenuToggle
          color='brandBlue.100'
          onOpen={onOpen}
          d={{ base: 'block', xl: 'none' }}
        />
      </Flex>
      <MobileNav isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;
