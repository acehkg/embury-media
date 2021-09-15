import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import groq from 'groq';
import { sanityClient } from '../utils/sanity.server';
import { urlFor } from '../utils/sanity';
import TransitionWrapper from '../components/layout/TransitionWrapper';
import HeroSection from '../components/hero/HeroSection';
import PageSeo from '../components/seo/PageSeo';

const LandingSection = dynamic(() =>
  import('../components/landing/LandingSection')
);

const index = ({ sanityData }) => {
  const { heroSection, firstSection, otherSections, siteMeta } = sanityData;
  const { asPath } = useRouter();

  const { title, description, image } = siteMeta[0];

  const src = urlFor(image).format('auto').url();

  const metadata = {
    pageTitle: title,
    description: description,
    currentURL: `https://emburymedia.com${asPath}`,
    previewImage: `${src}`,
    siteName: title,
  };
  return (
    <>
      <PageSeo metadata={metadata} />
      <TransitionWrapper>
        <HeroSection heroSection={heroSection} />
        <LandingSection
          headline={firstSection.title}
          colorDesignToken={firstSection.colorDesignToken}
          copy={firstSection.content}
          sectionImage={firstSection.sectionImage}
          callToAction={firstSection.callToAction}
          colorDesignToken={firstSection.colorDesignToken}
          index={0}
        />
        {otherSections.map((section, index) => {
          return (
            <LandingSection
              key={section._id}
              headline={section.title}
              copy={section.content}
              index={index}
              callToAction={section.callToAction}
              sectionImage={section.sectionImage}
              colorDesignToken={section.colorDesignToken}
            />
          );
        })}
      </TransitionWrapper>
    </>
  );
};

const heroQuery = groq`
*[_type == "heroSection"][0]{
  image,copy,serviceHeadline
}
`;

const landingContentQuery = groq`
*[_type == "landingSection"]{
  ...,
  content[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      }
    }
  }
}
`;

const metaQuery = groq`*[_type == "siteSettings"]{
  title,description,image
}`;

export async function getStaticProps() {
  // Fetch data from Sanity IO
  const heroSection = await sanityClient.fetch(heroQuery);
  const landingSections = await sanityClient.fetch(landingContentQuery);
  const siteMeta = await sanityClient.fetch(metaQuery);

  const sortedSections = landingSections.sort(
    (a, b) => a.sectionOrder - b.sectionOrder
  );
  const firstSection = sortedSections.shift();
  const otherSections = sortedSections;

  return {
    props: {
      sanityData: {
        heroSection,
        firstSection,
        otherSections,
        siteMeta,
      },
    },
  };
}
export default index;
