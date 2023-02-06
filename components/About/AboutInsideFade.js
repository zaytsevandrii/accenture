import Image from "next/image"
import React from "react"
import styles from "../../styles/About.module.scss"
import FadeInSection from "../FadeInSection"

const AboutInside = ({ num, title, text }) => {
    return (
        <div className="col-md-6 fadetop">
            <FadeInSection>
                <div className={styles.serblock}>
                    <div className={styles.serblocknum}>
                        <Image alt={title} src={num} width={130} className={styles.img}/>
                        <h3>{title}</h3>
                    </div>
                    <div className={styles.sertext}>
                        <p>{text}</p>
                    </div>
                </div>
            </FadeInSection>
        </div>
    )
}

export default AboutInside
