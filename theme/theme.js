import { extendTheme } from '@chakra-ui/react';

//global styles
import { styles, fonts, colors, textStyles } from './styles';

const overrides = {
  colors,
  fonts,
  textStyles,
  styles,
};

export default extendTheme(overrides);
