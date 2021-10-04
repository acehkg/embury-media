import { Flex, Button, Text, Stack } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

const CtaButton = ({ text, href }) => {
  return (
    <Link href={href}>
      <Button
        aria-label={text}
        as={ChakraLink}
        role='button'
        tabIndex='0'
        _hover={{ textDecoration: 'none', borderColor: 'brandBlue.100' }}
        variant='cta'
        size='cta'
      >
        {text}
      </Button>
    </Link>
  );
};

const CallToActionBox = ({ callToAction }) => {
  const {
    ctaText,
    buttonOneText,
    buttonOneLink,
    buttonTwoText,
    buttonTwoLink,
  } = callToAction;
  return (
    <Flex
      bg={{
        base: 'linear-gradient(0deg, rgba(240,22,91,1) 20%, rgba(3,110,140,1) 70%)',
        lg: 'linear-gradient(90deg, rgba(240,22,91,1) 30%, rgba(3,110,140,1) 100%)',
      }}
      mx='auto'
      w={{ base: '90%', lg: '85%' }}
      borderRadius='50px'
      px={{ base: '5%', lg: '2.5%' }}
      py='2rem'
      direction={{ base: 'column', lg: 'row' }}
    >
      <Text
        fontSize='1.5rem'
        textAlign={{ base: 'center', lg: 'left' }}
        w={{ base: '100%', lg: '60%' }}
        color='brandGrey.100'
      >
        {ctaText}
      </Text>
      <Stack
        mx='auto'
        width={{ base: '100%', md: '50%' }}
        spacing='1rem'
        direction={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
        pt={{ base: '2rem', lg: '0' }}
        align='center'
        justify='center'
      >
        <CtaButton text={buttonOneText} href={`/${buttonOneLink}`} />
        <CtaButton text={buttonTwoText} href={`/${buttonTwoLink}`} />
      </Stack>
    </Flex>
  );
};

export default CallToActionBox;
