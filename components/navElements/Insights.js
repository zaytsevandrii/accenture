import Link from "next/link"
import StylesNav from "../../styles/Navigate.module.scss"

const Insights = () => {
    return (
        <div className={StylesNav.insights}>
          <div className={StylesNav.secondaryNav}>
            <div className={StylesNav.leftBlock}>
                <p className={StylesNav.boldP}>FEATURED CONTENT</p>
                <Link href="/insights/voices" className={StylesNav.link}>
                    Voices of Change
                </Link>
                <p>
                    The path to 360° value starts here-featuring our most provocative thinking, extensive research and compelling
                    stories of shared success.
                </p>
                <Link href="/" className={StylesNav.link}>
                    War in Ukraine
                </Link>
                <p>Addressing the business and economic impact.</p>
            </div>
            <div className={StylesNav.rightBlock}>
                <Link href="/">5G</Link>
                <Link href="/">Artificial Intelligence</Link>
                <Link href="/">Blockchain</Link>
                <Link href="/">Cloud</Link>

                <Link href="/">Customer Experience</Link>
                <Link href="/">Cybersecurity</Link>
                <Link href="/">Digital Engineering & <br /> Manufacturing </Link>
                <Link href="/">Digital Transformation</Link>
                <Link href="/">Edge Computing</Link>
                <Link href="/">Future of Work</Link>
                <Link href="/">Supply Chain</Link>
                <Link href="/">Sustainability</Link>
                <Link href="/">Podcasts</Link>
                <Link href="/">Blogs</Link>
            </div>
            </div>
        </div>
    )
}

export default Insights
