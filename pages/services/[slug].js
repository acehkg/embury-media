import groq from 'groq';
import { sanityClient } from '../../utils/sanity';
import { Heading } from '@chakra-ui/react';
import Copy from '../../components/display/Copy';
import BackButton from '../../components/interfaces/BackButton';
import PrimaryButton from '../../components/interfaces/PrimaryButton';
import TransitionWrapper from '../../components/layout/TransitionWrapper';
import PageWrapper from '../../components/layout/PageWrapper';

const Service = ({ service }) => {
  console.log(service);
  const { title, copy, callToAction } = service;
  return (
    <TransitionWrapper>
      <PageWrapper>
        <Heading>{title}</Heading>
        <Copy fontSize='1.25rem' copy={copy} />
        <PrimaryButton
          href={`/${callToAction.link}`}
          text={callToAction.buttonText}
          variant='ctaLight'
        />
        <BackButton py='2rem' />
      </PageWrapper>
    </TransitionWrapper>
  );
};

export default Service;

const serviceQuery = groq`
*[_type == "services" && slug.current == $slug][0]{
    _id,
    title,
    description,
    image,
    copy,
    callToAction,
    "slug": slug.current
}
`;

export async function getStaticPaths() {
  // Get services sections
  const result = await sanityClient.fetch(
    groq`*[_type == "services" && defined(slug.current)][].slug.current`
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

  return {
    props: {
      service,
    },
  };
}
