import { extendTheme } from '@chakra-ui/react';

//global styles
import { styles, fonts, colors } from './styles';

const overrides = {
  colors,
  fonts,
  styles,
};

export default extendTheme(overrides);
