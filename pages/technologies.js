import React from "react"
import FirstTechSection from "../components/Technologies/FirstTechSection"
import SecondTechSection from "../components/Technologies/SecondTechSection"
import styles from '../styles/Technologies.module.scss'
import ChooseTech from "../components/Technologies/ChooseTech"

const technologies = () => {
    return (
        <div>
           

            <div className={styles.parallax}>
                <FirstTechSection/>
            </div>

            <SecondTechSection/>

            <div className={styles.parallax}>
            <ChooseTech/>
            </div>
        </div>
    )
}

export default technologies
