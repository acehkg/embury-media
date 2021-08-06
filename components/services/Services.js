import { useEffect, useState } from 'react';

import { Heading, Box } from '@chakra-ui/react';

import DataTabs from '../display/DataTabs';
import DataAccordion from '../display/DataAccordion';
import DisplayLarge from '../layout/DisplayLarge';
import DisplayMobile from '../layout/DisplayMobile';
import Section from '../layout/Section';
import { PortableText } from '../../utils/sanity';

const Services = ({ services, heroService }) => {
  const [main, setMain] = useState([]);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const [mainSection] = services.filter(
      (service) => service.title === `${heroService}`
    );
    setMain(mainSection);
    setSections(
      services.filter((service) => service.title !== `${heroService}`)
    );
  }, []);

  return (
    <>
      <Section direction='column' pb='2rem'>
        <Heading as='h2' fontSize='1.5rem' pb='2rem'>
          {main.title}
        </Heading>
        <Box fontSize={{ base: '1.25rem', lg: '1,5rem' }} lineHeight='1.8'>
          <PortableText blocks={main.copy} />
        </Box>
      </Section>
      <DisplayLarge>
        <DataTabs data={sections} />
      </DisplayLarge>
      <DisplayMobile>
        <DataAccordion data={sections} />
      </DisplayMobile>
    </>
  );
};

export default Services;
