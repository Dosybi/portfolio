import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://portfolio-dosybi.vercel.app/"
        />
        <meta property="og:title" content="Антон Досыбиев" />
        <meta
          property="og:description"
          content="Фронтенд-разработчик с навыками в UI/UX и редакторским бэкграундом"
        />
        <meta property="og:image" content="/meta-image.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://portfolio-dosybi.vercel.app/"
        />
        <meta property="twitter:title" content="Антон Досыбиев" />
        <meta
          property="twitter:description"
          content="Фронтенд-разработчик с навыками в UI/UX и редакторским бэкграундом"
        />
        <meta property="twitter:image" content="/meta-image.png" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
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
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&;300;200family=Source+Sans+Pro:wght@400;600;700&family=Montserrat:wght@400;700&family=Playfair+Display:ital,wght@0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
