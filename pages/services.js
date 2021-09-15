import groq from 'groq';
import { sanityClient } from '../utils/sanity.server';
import { SimpleGrid } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { urlFor } from '../utils/sanity';
import TransitionWrapper from '../components/layout/TransitionWrapper';
import ServiceCardLarge from '../components/services/ServiceCardLarge';
import PageSeo from '../components/seo/PageSeo';

const services = ({ sanityData }) => {
  const { sortedServices, siteMeta } = sanityData;

  const router = useRouter();
  const { asPath } = router;

  const { title, description, image } = siteMeta[0];

  const src = urlFor(image).auto('format').url();

  const metadata = {
    pageTitle: 'Services',
    description: description,
    currentURL: `https://emburymedia.com${asPath}`,
    previewImage: `${src}`,
    siteName: title,
  };

  return (
    <>
      <PageSeo metadata={metadata} />
      <TransitionWrapper>
        <SimpleGrid
          minChildWidth='300px'
          spacing='2rem'
          w='80%'
          mx='auto'
          pb='2rem'
        >
          {sortedServices.map((service) => {
            return <ServiceCardLarge key={service._id} service={service} />;
          })}
        </SimpleGrid>
      </TransitionWrapper>
    </>
  );
};

const servicesQuery = groq`
*[_type == "services"]
`;
const metaQuery = groq`*[_type == "siteSettings"]{
  title,description,image
}`;

export async function getStaticProps() {
  // Fetch data from Sanity IO
  const services = await sanityClient.fetch(servicesQuery);
  const sortedServices = services.sort(
    (a, b) => a.sectionOrder - b.sectionOrder
  );
  const siteMeta = await sanityClient.fetch(metaQuery);

  return {
    props: {
      sanityData: {
        sortedServices,
        siteMeta,
      },
    },
  };
}
export default services;
