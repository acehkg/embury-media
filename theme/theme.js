import { extendTheme } from '@chakra-ui/react';

//global styles
import { styles, fonts, colors, textStyles } from './styles';

//components
import { components } from './components';

const overrides = {
  colors,
  fonts,
  textStyles,
  styles,
  components,
};

export default extendTheme(overrides);
