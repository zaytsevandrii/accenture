import Link from "next/link"
import StylesNav from "../../styles/Navigate.module.scss"

const Services = () => {
    return (
        <div className={StylesNav.services}>
            <div className={StylesNav.secondaryNav}>
                <div className={StylesNav.servicesBlock}>
                    <Link href="/">Application Services</Link>
                    <Link href="/">Artificial Intelligence</Link>
                    <Link href="/">Automation</Link>
                    <Link href="/">Business Process Outsourcing</Link>
                    <Link href="/">Business Strategy</Link>
                    <Link href="/">Change Management</Link>
                    <Link href="/">Cloud</Link>
                    <Link href="/">Customer Experience</Link>
                    <Link href="/">Data & Analytics</Link>
                    <Link href="/">Digital Commerce</Link>
                    <Link href="/">Digital Engineering & Manufacturing</Link>
                    <Link href="/">Ecosystem Services</Link>
                    <Link href="/">Finance Consulting</Link>
                    <Link href="/">Infrastructure</Link>
                    <Link href="/">Marketing</Link>
                    <Link href="/">Mergers & Acquisitions (M&A)</Link>
                    <Link href="/">Metaverse</Link>
                    <Link href="/">Operating Models</Link>
                    <Link href="/">Security</Link>
                    <Link href="/">Supply Chain Management</Link>
                    <Link href="/">Sustainability</Link>
                    <Link href="/">Technology Consulting</Link>
                    <Link href="/">Technology Innovation</Link>
                    <Link href="/">Zero-Based Transformation</Link>
                </div>
            </div>
        </div>
    )
}

export default Services
