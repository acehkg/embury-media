require('dotenv').config();
const fs = require('fs');
const groq = require('groq');
const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: true,
});

const getHero = async () => {
  //query Sanity API to receive hero section data
  const heroQuery = groq`
*[_type == "heroSection"]{
  headline,
  image,
  copy,
  variant
  }
`;
  try {
    const heroSection = await client.fetch(heroQuery);

    //write output to a links.json file
    const filepath = `${process.cwd()}/__tests__/__testProps__/heroSection.js`;
    fs.writeFileSync(filepath, JSON.stringify(heroSection));
  } catch (error) {
    console.log(error);
  }
};

getHero();
