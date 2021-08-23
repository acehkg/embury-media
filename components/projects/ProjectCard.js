import { Flex, Heading, Text, Link } from '@chakra-ui/react';
import DisplayImage from '../images/DisplayImage';

const ProjectCard = ({ project }) => {
  const { headline, link, description, image } = project;
  return (
    <Flex direction='column' maxW='350px' justifySelf='center'>
      <DisplayImage width={1000} height={750} image={image} />
      <Heading>{headline}</Heading>
      <Text>{description}</Text>
      <Link href={link} isExternal>
        <Text>{link}</Text>
      </Link>
    </Flex>
  );
};

export default ProjectCard;
