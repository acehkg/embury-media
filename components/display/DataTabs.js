import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import ServicePanel from '../services/ServicePanel';

const DataTabs = ({ data, callToAction, ...rest }) => {
  return (
    <Tabs variant='enclosed' size='md' {...rest}>
      <TabList mb='1rem' w='80%' mx='auto'>
        {data.map((section, index) => {
          return (
            <Tab
              key={index}
              fontWeight='bold'
              fontSize={{ base: '1.25rem', xl: '1,5rem' }}
              _selected={{ bg: 'brandBlue.100', color: 'brandGrey.100' }}
            >
              {section.title}
            </Tab>
          );
        })}
      </TabList>
      <TabPanels>
        {data.map((section, index) => {
          return (
            <TabPanel key={index} p='0'>
              <ServicePanel
                copy={section.copy}
                callToAction={callToAction}
                w='80%'
                mx='auto'
                fontSize={{ base: '1.25rem', lg: '1,5rem' }}
                lineHeight='1.8'
              />
            </TabPanel>
          );
        })}
      </TabPanels>
    </Tabs>
  );
};

export default DataTabs;
