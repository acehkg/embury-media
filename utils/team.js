import groq from 'groq';
import { sanityClient } from './sanity.server';
import { Flex } from '@chakra-ui/react';
import TeamSection from '../components/team/TeamSection';
import CallToAction from '../components/interfaces/CallToAction';
import TransitionWrapper from '../components/layout/TransitionWrapper';
import PageWrapper from '../components/layout/PageWrapper';
import PageSeo from '../components/seo/PageSeo';
import { urlFor } from './sanity';
import { useRouter } from 'next/router';

const team = ({ teamSections }) => {
  const router = useRouter();
  const { asPath } = router;
  const { image } = teamSections[0];

  const src = urlFor(image).auto('format').url();

  const metadata = {
    pageTitle: 'Team',
    description: 'Embury Media team members',
    currentURL: `https://emburymedia.com${asPath}`,
    previewImage: `${src}`,
    siteName: 'Embury Media',
  };
  return (
    <>
      <PageSeo metadata={metadata} />
      <TransitionWrapper>
        <PageWrapper>
          {teamSections.map((section) => {
            return <TeamSection key={section._id} teamSection={section} />;
          })}
          <Flex justifyContent='center'>
            <CallToAction
              href='/contact'
              text='GET IN TOUCH'
              variant='ctaLight'
              py='2rem'
            />
          </Flex>
        </PageWrapper>
      </TransitionWrapper>
    </>
  );
};

const teamQuery = groq`*[_type == "teamMember"]{title,image,name,shortBio,bio, _id}`;

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
