import Link from "next/link"
import React, { useState } from "react"
import StylesNav from "../styles/Navigate.module.scss"
import Footer from "./Footer"
import Meta from "./Meta"
import dimax from "../public/Dimax.png"
import Image from "next/image"
import DropDown from "./DropDown"

const Navigate = ({ children }) => {
    console.log("navrender")

    return (
        <>
            <Meta />
            <div className={StylesNav.navbar}>
                <Link className={StylesNav.imgCont} href="/">
                    <div>
                        <Image src={dimax} alt="logo" style={{ width: "110%", height: "auto" }} />
                    </div>
                </Link>
                <div className={StylesNav.subMenu}>
                    <div className={StylesNav.navMenu}>
                        Development
                        <div className={StylesNav.navMenuAbs}>
                            <Link href="/">Development</Link>
                            <Link href="/">Developer</Link>
                            <Link href="/">Developer</Link>
                            <Link href="/">Developer</Link>
                        </div>
                        
                    </div>
                    <div className={StylesNav.navMenu}>
                        <Link href="/design">
                            <li>Design</li>
                        </Link>
                    </div>
                    <Link href="/" className={StylesNav.navMenu}>
                        <li>Portfolio</li>
                    </Link>
                    <Link href="/technologies" className={StylesNav.navMenu}>
                        <li>Technology</li>
                    </Link>
                    <Link href="/contact" className={StylesNav.navMenu}>
                        <li>Contact</li>
                    </Link>
                </div>
            </div>

            <div>{children}</div>
            <Footer />
        </>
    )
}

export default Navigate

{
    /* <Link className={StylesNav.imgCont} href="/">
    <div>
        <Image src={dimax} alt="logo" style={{ width: "110%", height: "auto" }} />
    </div>
</Link> */
}
