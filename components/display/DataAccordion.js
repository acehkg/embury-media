import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Box,
} from '@chakra-ui/react';
import ServicePanel from '../services/ServicePanel';

const DataAccordion = ({ data, callToAction, ...rest }) => {
  return (
    <Accordion defaultIndex={[]} allowToggle {...rest}>
      {data.map((section, index) => {
        return (
          <AccordionItem key={index}>
            <Heading>
              <AccordionButton
                _expanded={{ bg: 'brandBlue.100', color: 'brandGrey.100' }}
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
            <AccordionPanel>
              <ServicePanel
                copy={section.copy}
                callToAction={callToAction}
                w='80%'
                mx='auto'
                fontSize={{ base: '1.25rem', lg: '1,5rem' }}
                lineHeight='1.8'
              />
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default DataAccordion;
