require('dotenv').config();
const fs = require('fs');
const groq = require('groq');
const sanityClient = require('@sanity/client');
const imageBuilder = require('@sanity/image-url');

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: true,
});

const builder = imageBuilder(client);

const urlFor = (source) => {
  return builder.image(source);
};
const getMeta = async () => {
  //query Sanity API to receive hero section data
  const metaQuery = groq`
*[_type == "siteSettings"]
`;
  try {
    const metaSection = await client.fetch(metaQuery);

    const src = urlFor(metaSection[0].image).format('auto').url();

    const description = metaSection[0].description;

    const title = metaSection[0].title;

    const preBuildMeta = metaSection[0];

    //write output to a links.json file
    const filepath = `${process.cwd()}/components/seo/preBuildMeta.js`;
    fs.writeFileSync(filepath, JSON.parse(preBuildMeta));
  } catch (error) {
    console.log(error);
  }
};

getMeta();
