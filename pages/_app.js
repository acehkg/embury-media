//styling
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme/theme';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

//framer motion page transitions
import { AnimatePresence } from 'framer-motion';

//components diaplayed on every page
import Header from '../components/header/Header';
import Breadcrumbs from '../components/interfaces/BreadCrumb';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Breadcrumbs w='80%' fontSize='sm' py='2rem' />
      <AnimatePresence
        initial={false}
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  );
}
export default MyApp;
