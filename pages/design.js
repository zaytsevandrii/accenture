import Image from "next/image"
import React from "react"
import FadeInSection from "../components/FadeInSection"
import FadeInSectionL from "../components/FadeInSectionL"
import styles from "../styles/Design.module.scss"
import img from "../public/development-process2.png"

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
                    <div className="container">
                        <div className="row">
                            <div className="row">
                                <div className="col-lg-10 col-md-12 offset-lg-1 w-over">
                                    <div className="row">
                                        <div className="col-md-8 main-title fadeleft">
                                            <FadeInSectionL>
                                                <h2 className={styles.h2}>What Services Do We Offer?</h2>
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
                                                            We develop a bright and impressive UI design paying special attention
                                                            to the Mobile First.
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
                                                            We create a high-quality UX design thinking over the way of
                                                            interaction between a user and content.
                                                        </p>
                                                    </div>
                                                </div>
                                            </FadeInSection>{" "}
                                        </div>

                                        <div className="col-md-4 fadetop">
                                            {" "}
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
                                            </FadeInSection>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fw-main-row video-slider" /* style={{backgroundColor:'black'}} */>
                <div className={styles.process}>
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-12 col-lg-11 offset-lg-1">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="main-title fadeleft">
                                            <FadeInSectionL>
                                                {" "}
                                                <h2 className={styles.h2}>Web Development Process</h2>
                                            </FadeInSectionL>
                                        </div>
                                        <div className="pr-wrap row">
                                            <div className="col-md-6 pr-item fadetop">
                                                <FadeInSection>
                                                    <div className={styles.processNum}>01</div>
                                                    <div className={styles.processText}>
                                                        <h3>Planning</h3>

                                                        <p>
                                                            A visual presentation of the structures and naming conventions used on
                                                            the site should be set up.{" "}
                                                        </p>
                                                    </div>
                                                </FadeInSection>
                                            </div>
                                            <div className="col-md-6 pr-item fadetop">
                                                <FadeInSection>
                                                    <div className={styles.processNum}>02</div>
                                                    <div className={styles.processText}>
                                                        <h3>Analysis</h3>

                                                        <p>
                                                            The analysis of competitors and new trends, research, and case study.
                                                        </p>
                                                    </div>
                                                </FadeInSection>
                                            </div>
                                            <div className="col-md-6 pr-item fadetop">
                                                <FadeInSection>
                                                    <div className={styles.processNum}>03</div>
                                                    <div className={styles.processText}>
                                                        <h3>Design</h3>

                                                        <p>
                                                            {" "}
                                                            Construction of visuals, elaboration of layout details, and animation
                                                            of the website elements.
                                                        </p>
                                                    </div>
                                                </FadeInSection>
                                            </div>
                                            <div className="col-md-6 pr-item fadetop">
                                                <FadeInSection>
                                                    <div className={styles.processNum}>04</div>
                                                    <div className={styles.processText}>
                                                        <h3>Implementations</h3>

                                                        <p>
                                                            Content development and publishing, media elements selection, and
                                                            applying them to a prototype.
                                                        </p>
                                                    </div>
                                                </FadeInSection>
                                            </div>
                                            <div className="col-md-6 pr-item fadetop">
                                                <FadeInSection>
                                                    <div className={styles.processNum}>05</div>
                                                    <div className={styles.processText}>
                                                        <h3>Testing</h3>

                                                        <p>
                                                            This is to ensure that the necessary functions of the website are
                                                            working fine and are without errors.
                                                        </p>
                                                    </div>
                                                </FadeInSection>
                                            </div>
                                            <div className="col-md-6 pr-item fadetop">
                                                <FadeInSection>
                                                    <div className={styles.processNum}>06</div>
                                                    <div className={styles.processText}>
                                                        <h3>Maintanance</h3>
                                                        <p>
                                                            Websites are like “living” entities and need constant care and
                                                            maintenance.
                                                        </p>
                                                    </div>
                                                </FadeInSection>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className={styles.imageDev}>
                                            <div className="video-wrap">
                                                <div>
                                                    <Image src={img} width={400} height={400} alt="Web Development Process" />
                                                </div>
                                            </div>
                                        </div>
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
