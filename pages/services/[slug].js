import groq from 'groq';
import { sanityClient } from '../../utils/sanity';
import { useCallToAction } from '../../hooks/useCallToAction';
import { Box } from '@chakra-ui/react';

import OtherService from '../../components/services/OtherService';
import TransitionWrapper from '../../components/layout/TransitionWrapper';
import CallToAction from '../../components/interfaces/CallToAction';

const Service = ({ service, callToAction }) => {
  const contact = useCallToAction(callToAction, 'Contact');

  return (
    <TransitionWrapper>
      <OtherService service={service} />
      <CallToAction
        href='/contact'
        text={contact.copy}
        variant={contact.buttonVariant}
        py='2rem'
      />
    </TransitionWrapper>
  );
};

export default Service;

const serviceQuery = groq`
*[_type == "servicesSection" && slug.current == $slug][0]{
    _id,
    title,
    copy,
    "slug": slug.current
}
`;
const ctaQuery = groq`*[_type == "callToAction"]`;

export async function getStaticPaths() {
  // Get services sections
  const result = await sanityClient.fetch(
    groq`*[_type == "servicesSection" && defined(slug.current)][].slug.current`
  );

  const paths = result.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch blog post from Sanity
  const service = await sanityClient.fetch(serviceQuery, {
    slug: params.slug,
  });
  const callToAction = await sanityClient.fetch(ctaQuery);

  return {
    props: {
      service,
      callToAction,
    },
  };
}
