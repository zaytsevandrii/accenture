import React from "react"
import styles from "../../styles/Design.module.scss"
import FadeInSection from "../FadeInSection"

const SecondInsideFade = ({ num, title, text }) => {
    return (
        <div className="col-md-4 fadetop">
            <FadeInSection>
                <div className={styles.serblock}>
                    <div className={styles.serblocknum}>{num}</div>
                    <div className={styles.sertext}>
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                </div>
            </FadeInSection>
        </div>
    )
}

export default SecondInsideFade
