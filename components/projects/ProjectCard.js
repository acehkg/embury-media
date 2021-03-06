import { Flex, Heading, Text, Link, Box } from '@chakra-ui/react';
import DisplayImage from '../images/DisplayImage';
import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { GoLogoGithub } from 'react-icons/go';

const MotionCard = motion(Flex);

const ProjectCard = ({ project }) => {
  const { headline, link, description, image, gitHub } = project;

  return (
    <MotionCard
      direction='column'
      w='320px'
      justifySelf='center'
      boxShadow='xl'
      bg='brandBlue.200'
      justifyContent='space-between'
      borderRadius='25px'
      padding='1.5rem'
    >
      <Box h='200px' w='266px' mx='auto'>
        <DisplayImage width={1000} height={750} image={image} />
      </Box>
      <Heading textAlign='center' py='1rem'>
        {headline}
      </Heading>
      <Text fontSize='1.25rem'>{description}</Text>
      <Link href={link} py='1rem' color='brandPink.100' isExternal>
        {link}
        <HiExternalLink
          style={{
            display: 'inline',
            marginBottom: '.1rem',
            marginLeft: '.25rem',
          }}
        />
      </Link>
      <Link
        href={gitHub}
        color='brandPink.100'
        _hover={{ color: 'brandBlue.100' }}
        isExternal
      >
        {/*  {gitHub}
        <HiExternalLink
          style={{
            display: 'inline',
            marginBottom: '.1rem',
            marginLeft: '.25rem',
          }}
        /> */}
        <GoLogoGithub size={48} />
      </Link>
    </MotionCard>
  );
};

export default ProjectCard;
