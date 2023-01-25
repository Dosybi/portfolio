import Head from 'next/head'

const HeadSection = ({
  title,
  description = 'Фронтенд-разработчик с навыками в UI/UX и редакторским бэкграундом',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  )
}

export default HeadSection
