import Head from "next/head"

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: "Dimax media | Let there be change",
    keywords: "dimax, media agency, create website, web development, programming, build website",
    description:
        "Dimax media embraces the power of change to create the fastest websites; value and shared success for our clients, people, shareholders, partners and communities. ",
}

export default Meta
