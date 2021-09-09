import { AppProps } from 'next/app';
import Head from 'next/head';
import { GoogleFonts } from 'next-google-fonts';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '@/styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>CGA</title>
      </Head>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&family=Roboto:ital,wght@0,300;0,500;0,700;0,900;1,400&display=swap" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
