import { Heading, Avatar, Flex, Text } from '@chakra-ui/react';
import Section from '../layout/Section';
import CopyContainer from '../layout/CopyContainer';
import { PortableText } from '../../utils/sanity';
import { urlFor } from '../../utils/sanity';

const TeamSection = ({ teamSection }) => {
  const { image, name, title, shortBio, bio } = teamSection;

  const src = urlFor(image).height(300).auto('format').url();
  return (
    <Section direction='column'>
      <Flex
        direction='column'
        alignItems='center'
        width='80%'
        mx='auto'
        textAlign='center'
      >
        <Avatar
          name={name}
          src={src}
          size={{ base: '2xl', lg: 'full' }}
          my='1rem'
        />
        <Heading as='h3' fontSize='1.5rem' py='1rem'>
          {name}
        </Heading>
        <Heading as='h4' fontSize='1.25rem' py='1rem'>
          {title}
        </Heading>
        <Heading as='h5' fontSize='1.25rem' py='1rem'>
          {shortBio}
        </Heading>
      </Flex>
      <CopyContainer textAlign='center' fontSize='1.25rem'>
        <PortableText blocks={bio} />
      </CopyContainer>
    </Section>
  );
};

export default TeamSection;
