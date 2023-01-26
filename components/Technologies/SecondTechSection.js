import React from "react"
import FadeInSection from "../FadeInSection"
import FadeInSectionL from "../FadeInSectionL"
import styles from '../../styles/Design.module.scss'

const SecondTechSection = () => {
    return (
        <section className="fw-main-row">
            <div className={styles.service}>
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-lg-10 col-md-12 offset-lg-1 w-over">
                                <div className="row">
                                    <div className="col-md-8 main-title fadeleft">
                                        <FadeInSectionL>
                                            <h2 className={styles.h2}>We use clear winners</h2>
                                        </FadeInSectionL>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 fadetop">
                                        <FadeInSection>
                                            <div className={styles.serblock}>
                                                <div className={styles.serblocknum}>001</div>
                                                <div className={styles.sertext}>
                                                    <h3>Website Design</h3>
                                                    <p>
                                                        We develop a bright and impressive UI design paying special attention to
                                                        the Mobile First.
                                                    </p>
                                                </div>
                                            </div>
                                        </FadeInSection>
                                    </div>

                                    <div className="col-md-4 fadetop">
                                        <FadeInSection>
                                            <div className={styles.serblock}>
                                                <div className={styles.serblocknum}>002</div>
                                                <div className={styles.sertext}>
                                                    <h3>Prototype Development</h3>
                                                    <p>
                                                        We create a high-quality UX design thinking over the way of interaction
                                                        between a user and content.
                                                    </p>
                                                </div>
                                            </div>
                                        </FadeInSection>
                                    </div>

                                    <div className="col-md-4 fadetop">
                                        <FadeInSection>
                                            <div className={styles.serblock}>
                                                <div className={styles.serblocknum}>003</div>
                                                <div className={styles.sertext}>
                                                    <h3>Unique Style</h3>
                                                    <p>
                                                        We build up the corporate style of the company, and select the brand
                                                        colors and fonts.
                                                    </p>
                                                </div>
                                            </div>
                                        </FadeInSection>
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

export default SecondTechSection
