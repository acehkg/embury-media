import {
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from 'next-sanity';

import { config } from './config';

import {
  BlockRenderer,
  ListItems,
  EmphasizedText,
  ExternaLink,
  BodyImage,
  ContentList,
} from './serializers';

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
    types: {
      block: BlockRenderer,
      bodyImage: BodyImage,
      portableTextImage: BodyImage,
    },
    marks: { link: ExternaLink, em: EmphasizedText },
    listItem: ListItems,
    list: ContentList,
  },
});
// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);
