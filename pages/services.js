import { useState, useEffect } from 'react';
import groq from 'groq';
import useServices from '../hooks/useServices';
import { sanityClient } from '../utils/sanity';

import {
  Box,
  Spinner,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';

import { PortableText } from '../utils/sanity';

const services = ({ servicesSection }) => {
  //set loading state while hook logic executes
  const [loading, setLoading] = useState(true);

  //hook to seperate services array into the main section and the rest
  const { main, sections } = useServices(servicesSection, 'Service Philosophy');

  //change loading state when sections are set
  useEffect(() => {
    sections.length > 0 && setLoading(false);
  }, [sections]);

  //render spinner while loading
  if (loading === true) {
    return (
      <Box width='100%' textAlign='center' pt='5rem'>
        <Spinner color='brandPink.100' size='xl' />
      </Box>
    );
  }

  loading ? console.log('loading') : console.log(main, sections);

  return (
    <Tabs isFitted variant='enclosed'>
      <TabList mb='1rem'>
        {sections.map((section, index) => {
          return <Tab key={index}>{section.title}</Tab>;
        })}
      </TabList>
      <TabPanels>
        {sections.map((section, index) => {
          return (
            <TabPanel key={index}>
              <PortableText blocks={section.copy} />
            </TabPanel>
          );
        })}
      </TabPanels>
    </Tabs>
  );
};

const servicesQuery = groq`
*[_type == "servicesSection"]
`;

export async function getStaticProps() {
  // Fetch data from Sanity IO
  const servicesSection = await sanityClient.fetch(servicesQuery);

  return {
    props: {
      servicesSection,
    },
  };
}
export default services;
