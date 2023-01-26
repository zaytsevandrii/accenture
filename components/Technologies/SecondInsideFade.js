import React from "react"
import styles from '../../styles/Design.module.scss'

const SecondInsideFade = ({num,title,text}) => {
    return (
        <div className={styles.serblock}>
            <div className={styles.serblocknum}>{num}</div>
            <div className={styles.sertext}>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default SecondInsideFade
