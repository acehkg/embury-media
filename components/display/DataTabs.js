import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
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
            <TabPanel key={index}>
              <PortableText blocks={section.copy} />
            </TabPanel>
          );
        })}
      </TabPanels>
    </Tabs>
  );
};

export default DataTabs;
