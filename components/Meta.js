import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Accenture | Let there be change',
  keywords: 'accenture, web development, programming, Let there be change',
  description: 'Accenture embraces the power of change to create 360&#176; value and shared success for our clients, people, shareholders, partners and communities. Learn more.',
}

export default Meta