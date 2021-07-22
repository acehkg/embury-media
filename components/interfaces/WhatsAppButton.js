import { IconButton } from '@chakra-ui/react';
import { ImWhatsapp } from 'react-icons/im';

const WhatsAppButton = ({ color, iconSize, href, ...rest }) => {
  return (
    <IconButton
      as='a'
      href={href}
      icon={<ImWhatsapp size={iconSize} />}
      {...rest}
    />
  );
};

export default WhatsAppButton;
