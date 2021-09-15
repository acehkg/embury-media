import groq from 'groq';
import { sanityClient } from '../utils/sanity.server';
import { Flex } from '@chakra-ui/react';
import TeamSection from '../components/team/TeamSection';
import CallToAction from '../components/interfaces/CallToAction';
import TransitionWrapper from '../components/layout/TransitionWrapper';
import PageWrapper from '../components/layout/PageWrapper';
import PageSeo from '../components/seo/PageSeo';
import { urlFor } from '../utils/sanity';
import { useRouter } from 'next/router';

const team = ({ teamSections }) => {
  const router = useRouter();
  const { asPath } = router;
  const { image, name, shortBio } = teamSections[1];

  const src = urlFor(image).format('auto').url();

  const metadata = {
    pageTitle: name,
    description: shortBio,
    currentURL: `https://emburymedia.com${asPath}`,
    previewImage: `${src}`,
    siteName: 'Embury Media',
  };
  return (
    <>
      <PageSeo metadata={metadata} />
      <TransitionWrapper>
        <PageWrapper>
          <TeamSection teamSection={teamSections[1]} />
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
