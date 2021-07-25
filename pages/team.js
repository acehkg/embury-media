import groq from 'groq';
import { sanityClient } from '../utils/sanity';
import { Flex } from '@chakra-ui/react';
import TeamSection from '../components/team/TeamSection';
import CallToAction from '../components/interfaces/CallToAction';

const team = ({ teamSections }) => {
  return (
    <>
      <TeamSection teamSection={teamSections[0]} />
      <Flex justifyContent='center' width='80%' mx='auto'>
        <CallToAction
          href='/contact'
          text='get in touch'
          variant='callToAction'
          py='2rem'
        />
      </Flex>
    </>
  );
};

const teamQuery = groq`*[_type == "teamMember"]{title,image,name,shortBio,bio}`;

export async function getStaticProps() {
  // Fetch data from Sanity IO
  const teamSections = await sanityClient.fetch(teamQuery);
  return {
    props: {
      teamSections,
    },
  };
}

export default team;
