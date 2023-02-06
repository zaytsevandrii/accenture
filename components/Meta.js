import Head from "next/head"

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
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
