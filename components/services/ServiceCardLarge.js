import { Flex, Heading, Box, Text } from '@chakra-ui/react';
import DisplayImage from '../images/DisplayImage';
import PrimaryButton from '../interfaces/PrimaryButton';
import { motion } from 'framer-motion';
import LearnMore from '../interfaces/LearnMore';

const MotionCard = motion(Flex);
const ServiceCardLarge = ({ service }) => {
  const { title, slug, image, description } = service;
  return (
    <MotionCard
      direction='column'
      w='320px'
      justifySelf='center'
      border='2px solid'
      //alignItems='center'
      justifyContent='space-between'
      borderRadius='4px'
      padding='1rem'
    >
      <Box h='200px' w='200px'>
        <DisplayImage width={300} height={300} image={image} />
      </Box>
      <Heading textAlign='center' py='1rem'>
        {title}
      </Heading>
      <Text fontSize='1.25rem'>{description}</Text>
      <LearnMore
        href={`/services/${slug.current}`}
        text='Details'
        pt='1rem'
        size='small'
      />
    </MotionCard>
  );
};

export default ServiceCardLarge;
