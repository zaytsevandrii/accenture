import React from "react"
import styles from "../../styles/Techsections.module.scss"

const FirstTechSection = () => {
    return (
        <section className="fw-main-row about-us ecommerce">
            <div className={styles.body}>
                <div className="container">
                    <div className={styles.stars}></div>
                    <div className={styles.stars2}></div>
                    <div className={styles.stars3}></div>
                    <div className={styles.title}>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 col-md-12">
                                <div className="row">
                                    <div className="col-xs-12 col-md-8 ">
                                        <div className={styles.bigtext}>
                                            Use the fastest stack for
                                            <br />
                                            <span>Web Development</span>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-4 pr-md-0 hidden-xs">
                                        <div className={styles.smalltext}>
                                            <p>
                                                Page speed is the most important of SEO factors, because addressing loading times
                                                improves your rankings, your user experience and your conversion rate too. It is a
                                                rare example of an SEO measure that is a win for absolutely everyone!
                                            </p>
                                            <p>
                                                User experience is really the big reason that search engines think website speed
                                                is such an important factor, and that is why it is part of their ranking algorithms.
                                                It is a universally acknowledged fact that on the internet, no-one has an attention
                                                span of more than a couple of seconds.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FirstTechSection
