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
              <AccordionButton
                _expanded={{ bg: 'brandBlue.200', color: 'brandPink.100' }}
              >
                <Box
                  flex='1'
                  textAlign='left'
                  fontSize='1.5rem'
                  fontWeight='bold'
                >
                  {section.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              <Box
                w='90%'
                mx='auto'
                fontSize={{ base: '1.25rem', lg: '1,5rem' }}
                lineHeight='1.8'
              >
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
