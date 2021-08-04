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
          <AccordionItem>
            <Heading>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  {section.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              <PortableText blocks={section.copy} />
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default DataAccordion;
