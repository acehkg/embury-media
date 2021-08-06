import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Box,
} from '@chakra-ui/react';

import { PortableText } from '../../utils/sanity';

const DataAccordion = ({ data, ...rest }) => {
  return (
    <Accordion defaultIndex={[]} allowToggle {...rest}>
      {data.map((section, index) => {
        return (
          <AccordionItem key={index}>
            <Heading>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  {section.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              <Box w='90%' mx='auto'>
                <PortableText blocks={section.copy} />
              </Box>
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default DataAccordion;
