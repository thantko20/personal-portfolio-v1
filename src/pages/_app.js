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
          <meat name='title' content='Thant Ko Zaw - Fullstack Developer' />
          <meta
            name='description'
            content='A fullstack developer based in Myanmar who loves building web apps.'
          />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://www.thantko.dev' />
          <meta
            property='og:title'
            content='Thant Ko Zaw - Fullstack Developer'
          />
          <meta
            property='og:description'
            content='A fullstack developer based in Myanmar who loves building web apps.'
          />
          <meta
            property='og:image'
            content='https://www.thantko.dev/_next/image?url=%2Fprofile.jpg&w=1080&q=75'
          />
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://www.thantko.dev' />
          <meta
            property='twitter:title'
            content='Thant Ko Zaw - Fullstack Developer'
          />
          <meta
            property='twitter:description'
            content='A fullstack developer based in Myanmar who loves building web apps.'
          />
          <meta
            property='twitter:image'
            content='https://www.thantko.dev/_next/image?url=%2Fprofile.jpg&w=1080&q=75'
          ></meta>
          <title>Thant Ko Zaw - Fullstack Developer</title>
        </Head>
        <GlobalStyles />
        <ScrollProvider>
          <Component {...pageProps} />
        </ScrollProvider>
      </ThemeProvider>
    </>
  );
}
