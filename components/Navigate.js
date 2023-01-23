import Link from "next/link"
import React, { useState } from "react"
import StylesNav from "../styles/Navigate.module.scss"
import Footer from "./Footer"
import Meta from "./Meta"
import AboutAccenture from "./navElements/AboutAccenture"
import Careers from "./navElements/Careers"
import Industries from "./navElements/Industries"
import Insights from "./navElements/Insights"
import Services from "./navElements/Services"
import NavMenu from "./NavMenu"
import dimax from '../public/Dimax.png'
import Image from "next/image"

const Navigate = ({ children }) => {  
    console.log('navrender')
    
    return (
        <>
            <Meta />
            <div className={StylesNav.navbar}>
                <Link className={StylesNav.imgCont} href="/">
                    <div >
                        <Image 
                            src={dimax}
                            alt="logo"
                            width={150}
                        />
                    </div>
                </Link>
                <div className={StylesNav.subMenu}>
                    <NavMenu  title='Development'><Insights /></NavMenu>
                    <NavMenu title='Design'><Services/></NavMenu>
                    <NavMenu title='Portfolio'><Industries/></NavMenu>
                    <NavMenu title='Careers'><Careers/></NavMenu>
                    <NavMenu title='Our team'><AboutAccenture/></NavMenu>
                </div>
            </div>
            <div>{children}</div>
            <Footer/>
        </>
    )
}

export default Navigate

