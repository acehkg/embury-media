import { IconButton } from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';

const EmailButton = ({ color, iconSize, href, ...rest }) => {
  return (
    <IconButton
      as='a'
      href={href}
      icon={<MdEmail size={iconSize} />}
      {...rest}
    />
  );
};

export default EmailButton;
