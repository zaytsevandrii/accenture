import React from "react"
import styles from "../../styles/Home.module.scss"

const ChooseUs = () => {
    return (
        <div className={styles.choose}>
            <div className={styles.box}>
                <div className={styles.bigtext}>Why choose us?</div>
                <ul>
                    <div className={styles.choosebox}>
                        <div>
                            <p className={styles.num}>001</p>
                            <li>Transparent Working Conditions</li>
                        </div>
                        <p className={styles.text}>We provide a contract with guarantees and obligations.</p>
                    </div>
                    <div className={styles.choosebox}>
                        <div>
                            <p className={styles.num}>002</p>
                            <li>Ongoing Feedback</li>
                        </div>
                        <p className={styles.text}>Stay connected via communication channels that are comfortable for you.</p>
                    </div>
                    <div className={styles.choosebox}>
                        <div>
                            <p className={styles.num}>003</p>
                            <li>Website training, Tech Support</li>
                        </div>
                        <p className={styles.text}>Consulting & recommendations after launching.</p>
                    </div>
                    <div className={styles.choosebox}>
                        <div>
                            <p className={styles.num}>004</p>
                            <li>Modern and the fastest technologies</li>
                        </div>
                        <p className={styles.text}>Kubernetes, Next js, GraphQL, AWS, Vite, React, Nest JS... and on and on and on.</p>
                    </div>
                    <div className={styles.choosebox}>
                        <div>
                            <p className={styles.num}>005</p>
                            <li>Ultimate Involvement in Your Business</li>
                        </div>
                        <p className={styles.text}>We involve in business processes and build conversion-centered designs.</p>
                    </div>
                    <div className={styles.choosebox}>
                        <div>
                            <p className={styles.num}>006</p>
                            <li>Custom Design & Web Development</li>
                        </div>
                        <p className={styles.text}>Clean and optimized code, responsive design for your target audience.</p>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default ChooseUs
