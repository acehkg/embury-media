import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme/theme';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
