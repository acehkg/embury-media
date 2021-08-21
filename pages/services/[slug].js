import groq from 'groq';
import { sanityClient } from '../../utils/sanity';
import TransitionWrapper from '../../components/layout/TransitionWrapper';

const Service = ({ service }) => {
  return (
    <TransitionWrapper>
      <h1>{service.title}</h1>
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
