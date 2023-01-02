import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme, { GlobalStyles } from '../theme';
import ScrollProvider from '../components/ScrollProvider';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#000000' />
          <meta
            name='description'
            content='A passionate fullstack developer whose priority is to overcome any bumps.'
          />
          <title>Thant Ko</title>
        </Head>
        <GlobalStyles />
        <ScrollProvider>
          <Component {...pageProps} />
        </ScrollProvider>
      </ThemeProvider>
    </>
  );
}
