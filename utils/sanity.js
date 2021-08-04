import {
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from 'next-sanity';
import BlockContent from '@sanity/block-content-to-react';

import { Text, Heading, Link } from '@chakra-ui/react';
import { HiExternalLink } from 'react-icons/hi';

//custom seerializer to render block of text
const BlockRenderer = (props) => {
  const { style } = props.node;

  if (style === 'normal') {
    return <Text py='1rem'>{props.children}</Text>;
  }

  if (style === 'h3') {
    return (
      <Heading as='h3' fontSize='1.5rem' pt='1rem'>
        {props.children}
      </Heading>
    );
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};
//custom serializer for link
const ExternaLink = ({ mark, children }) => {
  return (
    <Link
      fontWeight='bold'
      textDecoration='underline'
      href={mark.href}
      target='_blank'
      rel='noopener'
    >
      {children} <HiExternalLink style={{ display: 'inline' }} />
    </Link>
  );
};
//custome serializer for em
const EmphasizedText = ({ children }) => {
  return (
    <Text
      display='inline'
      color='brandPink.100'
      fontStyle='normal'
      fontWeight='bold'
    >
      {children}
    </Text>
  );
};
const config = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: process.env.NODE_ENV === 'production',
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
};

if (!config.projectId) {
  throw Error('The Project ID is not set. Check your environment variables.');
}
if (!config.dataset) {
  throw Error('The dataset name is not set. Check your environment variables.');
}

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Set up the live preview subsscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
  ...config,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: {
    types: { block: BlockRenderer },
    marks: { link: ExternaLink, em: EmphasizedText },
  },
});

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);
// Set up a preview client with serverless authentication for drafts

export const previewClient = createClient({
  ...config,
  useCdn: false,
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;
