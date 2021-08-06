import { Tabs, Tab, TabList, TabPanels, TabPanel, Box } from '@chakra-ui/react';
import { PortableText } from '../../utils/sanity';

const DataTabs = ({ data, ...rest }) => {
  return (
    <Tabs isFitted variant='enclosed' size='sm' {...rest}>
      <TabList mb='1rem'>
        {data.map((section, index) => {
          return <Tab key={index}>{section.title}</Tab>;
        })}
      </TabList>
      <TabPanels>
        {data.map((section, index) => {
          return (
            <TabPanel key={index} p='0'>
              <Box w='80%' mx='auto'>
                <PortableText blocks={section.copy} />
              </Box>
            </TabPanel>
          );
        })}
      </TabPanels>
    </Tabs>
  );
};

export default DataTabs;
