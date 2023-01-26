import Image from "next/image"
import React from "react"
import FirstSection from "../components/Design/FirstSection"
import FirstTechSection from "../components/Technologies/FirstTechSection"
import SecondTechSection from "../components/Technologies/SecondTechSection"
import img from '../public/circle.jpg'
import styles from '../styles/Technologies.module.scss'

const technologies = () => {
    return (
        <div>
           

            <div className={styles.parallax}>
                <FirstTechSection/>
            </div>

            <SecondTechSection/>

            <div className={styles.parallax}>
            This div is just here to enable scrolling. Tip: Try to remove the background-attachment property to remove the
                scrolling effect.
            </div>
        </div>
    )
}

export default technologies
