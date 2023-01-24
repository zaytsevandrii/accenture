import React from "react"
import styles from "../styles/Design.module.scss"

const design = () => {
    return (
        <>
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
                                                Developing a Juicy
                                                <br />
                                                <span> Website Design</span>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-4 pr-md-0 hidden-xs">
                                            <div className={styles.smalltext}>
                                                <p>
                                                    The first thing the user sees while entering the webpage is the site’s design,
                                                    that is why it is important to keep the balance between pithiness and
                                                    creativity.
                                                </p>
                                                <p>
                                                    The main goal of the design is to hook the person’s attention in the first 2-3
                                                    seconds, spark interest, and increase the time spent on the website while
                                                    checking services and products the company provides.
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
            <section className="fw-main-row">
                <div className={styles.service}>
                    <div className="container "></div>
                    <div className="row"></div>

                    <div className="row">
                        <div className="col-lg-10 col-md-12 offset-lg-1 w-over">
                            <div className="row">
                                <div className="col-md-8 main-title fadeleft">
                                    <h2>What Services Do We Offer?</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 fadetop">
                                    <div className="studio-meta">001</div>
                                    <div className="studio-text">
                                        <h3>Website Design</h3>
                                        <p>
                                            We develop a bright and impressive UI design paying special attention to the Mobile
                                            First.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 fadetop">
                                    <div className="studio-meta">002</div>
                                    <div className="studio-text">
                                        <h3>Prototype Development</h3>
                                        <p>
                                            We create a high-quality UX design thinking over the way of interaction between a user
                                            and content.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-4 fadetop">
                                    <div className="studio-meta">003</div>
                                    <div className="studio-text">
                                        <h3>Unique Style</h3>
                                        <p>
                                            We build up the corporate style of the company, create a logo, and select the brand
                                            colors and fonts.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default design
