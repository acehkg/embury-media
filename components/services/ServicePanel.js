import { PortableText } from '../../utils/sanity';
import { Box } from '@chakra-ui/layout';
import CallToAction from '../interfaces/CallToAction';
import { useCallToAction } from '../../hooks/useCallToAction';

const ServicePanel = ({ callToAction, copy, ...rest }) => {
  const contact = useCallToAction(callToAction, 'Contact');

  return (
    <Box {...rest}>
      <PortableText blocks={copy} />
      <CallToAction
        href='/contact'
        text={contact.copy}
        variant={contact.buttonVariant}
        py='2rem'
      />
    </Box>
  );
};

export default ServicePanel;
