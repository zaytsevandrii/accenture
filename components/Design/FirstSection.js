import React from 'react'
import styles from '../../styles/Design.module.scss'

const FirstSection = () => {
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
  )
}

export default FirstSection