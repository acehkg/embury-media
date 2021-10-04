import dynamic from 'next/dynamic';
import PlausibleProvider from 'next-plausible';
//styling
import { ChakraProvider } from '@chakra-ui/react';
import 'focus-visible/dist/focus-visible';
import theme from '../theme/theme';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

//framer motion page transitions
import { AnimatePresence } from 'framer-motion';

//components diaplayed on every page
//import Header from '../components/header/Header';
//import Breadcrumbs from '../components/interfaces/BreadCrumb';

const Header = dynamic(() => import('../components/header/Header'));
const Breadcrumbs = dynamic(() =>
  import('../components/interfaces/BreadCrumb')
);
const Footer = dynamic(() => import('../components/footer/Footer'));

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain='emburymedia.com'>
      <ChakraProvider theme={theme}>
        <Header />
        <Breadcrumbs w='80%' fontSize='sm' py='2rem' />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
        <Footer />
      </ChakraProvider>
    </PlausibleProvider>
  );
}
export default MyApp;
