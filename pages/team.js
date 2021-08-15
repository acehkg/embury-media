import groq from 'groq';
import { sanityClient } from '../utils/sanity';
import { Flex } from '@chakra-ui/react';
import TeamSection from '../components/team/TeamSection';
import CallToAction from '../components/interfaces/CallToAction';
import { useCallToAction } from '../hooks/useCallToAction';
import TransitionWrapper from '../components/layout/TransitionWrapper';
import PageWrapper from '../components/layout/PageWrapper';

const team = ({ teamSections, callToAction }) => {
  const contact = useCallToAction(callToAction, 'Contact');
  return (
    <TransitionWrapper>
      <TeamSection teamSection={teamSections[1]} />
      <Flex justifyContent='center'>
        <CallToAction
          href='/contact'
          text={contact.copy}
          variant={contact.buttonVariant}
          py='2rem'
        />
      </Flex>
    </TransitionWrapper>
  );
};

const teamQuery = groq`*[_type == "teamMember"]{title,image,name,shortBio,bio}`;
const ctaQuery = groq`*[_type == "callToAction"]`;

export async function getStaticProps() {
  // Fetch data from Sanity IO
  const teamSections = await sanityClient.fetch(teamQuery);
  const callToAction = await sanityClient.fetch(ctaQuery);
  return {
    props: {
      teamSections,
      callToAction,
    },
  };
}

export default team;
