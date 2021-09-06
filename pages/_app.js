import "../styles/globals.css";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>
          Konfigg | Create and deploy new pages of your website in a few clicks
        </title>
        <meta charSet="UTF-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="Empower every visitor with unique content based on his keyword research."
        />
        <meta
          property="og:title"
          content="Konfigg | Create and deploy new pages of your website in a few clicks"
        />
        <meta
          property="og:description"
          content="Empower every visitor with unique content based on his keyword research."
        />
        <meta property="og:image" content="/social.png" />
        <meta property="og:url" content="https://www.konfigg.com/" />
        <link rel="icon" href="/favicon.svg" type="image/svg" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
