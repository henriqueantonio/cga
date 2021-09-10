import { AppProps } from 'next/app';
import Head from 'next/head';
import { GoogleFonts } from 'next-google-fonts';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '@/styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>CGA - Classificação do Grau de Alergias</title>
        <meta
          name="description"
          content="Olá, você é Dermatologista? Quer ajudar a ciência a avançar no ramo de alergias? Somos estudantes de Ciência da Computação em busca de imagens de testes alérgicos (de contato) para um TCC totalmente voltado na utilização de Aprendizagem de Máquina para saúde, venha conversar conosco!"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&family=Roboto:ital,wght@0,300;0,500;0,700;0,900;1,400&display=swap" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
