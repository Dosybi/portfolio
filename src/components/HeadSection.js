import Head from 'next/head'
import Script from 'next/script'

const googleAnalytics = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-E53QDEDDDQ');
`

const HeadSection = ({
  title,
  description = 'Фронтенд-разработчик с навыками в UI/UX и редакторским бэкграундом',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-E53QDEDDDQ"
      />
      <Script
        id="G-E53QDEDDDQ"
        dangerouslySetInnerHTML={{ __html: googleAnalytics }}
      />
    </>
  )
}

export default HeadSection
