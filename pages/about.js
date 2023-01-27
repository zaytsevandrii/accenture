import React from "react"
import CountSection from "../components/About/CountSection"
import styles from ".././styles/About.module.scss"
import SecondAbout from "../components/About/SecondAbout"
import ChooseTech from "../components/Technologies/ChooseTech"

const about = () => {
    return (
        <div>
            <div className={styles.parallax}>
                <CountSection />
            </div>
            <SecondAbout/>
            <div className={styles.parallax}>
                <ChooseTech/>
            </div>
        </div>
    )
}

export default about
