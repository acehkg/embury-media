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
        h='18vh'
        justifyContent='space-between'
        alignItems='center'
        mx='auto'
      >
        <Logo />
        <DesktopNav
          d={{ base: 'none', lg: 'block' }}
          spacing='8rem'
          fontSize='1.25rem'
        />
        <MenuToggle
          color='brandBlue.100'
          onOpen={onOpen}
          d={{ base: 'block', lg: 'none' }}
        />
      </Flex>
      <MobileNav isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;
