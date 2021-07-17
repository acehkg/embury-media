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
        as='header'
        w='100%'
        h='15vh'
        justifyContent='space-between'
        alignItems='center'
        px='2rem'
      >
        <Logo />
        <DesktopNav d={['none', 'none', 'block', 'block']} spacing='8rem' />
        <MenuToggle
          color='brandBlue.100'
          onOpen={onOpen}
          d={['block', 'block', 'none', 'none']}
        />
      </Flex>
      <MobileNav isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;
