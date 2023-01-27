import React from "react"
import FadeInSectionL from "../FadeInSectionL"
import styles from '../../styles/Design.module.scss'
import SecondInsideFade from "./SecondInsideFade"

const SecondTechSection = () => {
    const useTechs = [
        {num:'001',title:'Next Js', text:'Next. js is a framework that allows you to build supercharged, SEO-friendly, and extremely user-facing static websites and web applications.'},
        {num:'002',title:'React & Vue', text:'Vue. js and React. js are JavaScript-based toolkit systems. They help build dynamic user interfaces.'},
        {num:'003',title:'Nest Js', text:'NestJS is a framework for building efficient, scalable Node. js web applications. It uses modern JavaScript and is built with TypeScript.'},
        {num:'004',title:'Node & Express', text:'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.'},
        {num:'005',title:'GraphQL', text:'GraphQL lets developers construct requests that pull data from multiple data sources in a single API call.'},
        {num:'006',title:'Kubernetes', text:'Kubernetes is a platform for running and managing containers from many container runtimes.'},
        {num:'007',title:'Docker', text:'Docker is a platform designed to help developers build, share, and run modern applications.'},
        {num:'008',title:'AWS & GCP', text:'Moving to the cloud is giving organizations of all shapes and sizes the ability to move faster, be more agile, and innovate their businesses.'},
        {num:'009',title:'GoLang', text:'Golang is useful for carrying out programming for scalable servers and large software systems.'},
    ]
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
                                         {useTechs.map(el=>(
                                            <SecondInsideFade {...el} key={el.num}/>
                                         ))}
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
