import { Flex, Heading, Box } from '@chakra-ui/react';
import DisplayImage from '../images/DisplayImage';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { serviceCard } from '../animation/Animations';

const MotionCard = motion(Flex);
const ServiceCard = ({ service }) => {
  const { title, slug, image } = service;
  return (
    <Link href={`/services/${slug.current}`}>
      <MotionCard
        as='a'
        direction='column'
        w='320px'
        h='320px'
        justifySelf='center'
        bg='brandBlue.200'
        //border='2px solid'
        boxShadow='xl'
        alignItems='center'
        justifyContent='space-between'
        borderRadius='4px'
        padding='1rem'
        variants={serviceCard}
        whileHover='hover'
        whileTap='tap'
      >
        <Box h='200px' w='200px'>
          <DisplayImage width={300} height={300} image={image} />
        </Box>
        <Heading textAlign='center'>{title}</Heading>
      </MotionCard>
    </Link>
  );
};

export default ServiceCard;
