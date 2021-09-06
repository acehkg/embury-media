import { useRouter } from 'next/router';
import Link from 'next/link';
import groq from 'groq';
import { getClient } from '../../utils/sanity.server';
import { usePreviewSubscription } from '../../utils/sanity';
import { Heading, Button, Spinner } from '@chakra-ui/react';
import { GoEyeClosed } from 'react-icons/go';
import Copy from '../../components/display/Copy';
import BackButton from '../../components/interfaces/BackButton';
import PrimaryButton from '../../components/interfaces/PrimaryButton';
import TransitionWrapper from '../../components/layout/TransitionWrapper';
import PageWrapper from '../../components/layout/PageWrapper';

const ExitButton = () => {
  return (
    <Link href='/api/exit-preview'>
      <Button
        as='a'
        position='fixed'
        top='10'
        right='10'
        backgroundColor='red'
        color='white'
      >
        <GoEyeClosed />
        EXIT PREVIEW
      </Button>
    </Link>
  );
};

const Service = ({ data, preview }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }

  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData: data?.service,
    // The passed-down preview context determines whether this function does anything
    enabled: preview,
  });

  // Client-side uses the same query, so we may need to filter it down again

  const service = preview
    ? filterDataToSingleItem(previewData, preview)
    : data.service;

  const { title, copy, callToAction } = service;
  return (
    <TransitionWrapper>
      <PageWrapper>
        {preview && <ExitButton />}
        {title && <Heading>{title}</Heading>}
        {copy && <Copy fontSize='1.25rem' copy={copy} />}
        {callToAction && (
          <PrimaryButton
            href={`/${callToAction.link}`}
            text={callToAction.buttonText}
            variant='ctaLight'
          />
        )}
        <BackButton py='2rem' />
      </PageWrapper>
    </TransitionWrapper>
  );
};

export default Service;

/**
 * Helper function to return the correct version of the document
 * If we're in "preview mode" and have multiple documents, return the draft
 */
function filterDataToSingleItem(data, preview) {
  if (!Array.isArray(data)) return data;

  return data.length > 1 && preview
    ? data.filter((item) => item._id.startsWith(`drafts.`)).slice(-1)[0]
    : data.slice(-1)[0];
}

/**
 * Makes Next.js aware of all the slugs it can expect at this route
 *
 * See how we've mapped over our found slugs to add a `/` character?
 * Idea: Add these in Sanity and enforce them with validation rules :)
 * https://www.simeongriggs.dev/nextjs-sanity-slug-patterns
 */

export async function getStaticPaths() {
  const allSlugsQuery = groq`*[defined(slug.current)][].slug.current`;
  const results = await getClient().fetch(allSlugsQuery);

  return {
    paths: results.map((slug) => `/services/${slug}`),
    fallback: true,
  };
}

/**
 * Fetch the data from Sanity based on the current slug
 *
 * Important: You _could_ query for just one document, like this:
 * *[slug.current == $slug][0]
 * But that won't return a draft document!
 * And you get a better editing experience
 * fetching draft/preview content server-side
 *
 * Also: Ignore the `preview = false` param!
 * It's set by Next.js "Preview Mode"
 * It does not need to be set or changed here
 */
export async function getStaticProps({ params, preview = false }) {
  const query = groq`*[_type == "services" && slug.current == $slug]`;
  const queryParams = { slug: params.slug };
  const data = await getClient(preview).fetch(query, queryParams);
  // Escape hatch, if our query failed to return data
  if (!data) return { notFound: true };

  // Helper function to reduce all returned documents down to just one
  const service = filterDataToSingleItem(data, preview);

  return {
    props: {
      // Pass down the "preview mode" boolean to the client-side
      preview,
      // Pass down the initial content, and our query
      data: { service, query, queryParams },
    },
  };
}

/* const serviceQuery = groq`
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
} */
