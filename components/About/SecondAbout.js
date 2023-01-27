import React from "react"
import FadeInSectionL from "../FadeInSectionL"
import styles from '../../styles/About.module.scss'
import AboutInside from "./AboutInsideFade"
import img from '../../public/San2.jpg'
import img1 from '../../public/Vlad.jpg'
import img2 from '../../public/Max.jpg'
import img3 from '../../public/Den.jpg'
import img4 from '../../public/Mark.jpg'
import img5 from '../../public/Alex.jpg'

const SecondAbout = () => {
    const useTechs = [
        {id:1,num:img1,title:'Vlad - Backend Engineer', text:'More than 10 years experience. Knowledge stack: C++, C#, Python, Node js, HTML, CSS, JS, MySQL, Mongo, PostgreSQL, Ruby, Go, PHP.'},
        {id:2,num:img2,title:'Max - Senior Front End Developer', text:'More than 6 years of e-commerce development. Knowledge stack: HTML, CSS, SASS, Bootstrap, Next js, React, Redux, Vue, Javascript, Typescript, Node js.'},
        {id:3,num:img,title:'Alex - Cloud Architect', text:'Has extensive experience in creating a cloud platform. Helps train namecheap employees. Knowledge stack: SAFe, Kanban, TOGAF, AWS, GCP, deep hosting knowledge, Python, Docker, Linux, Kubernetes'},
        {id:4,num:img3,title:'Den - Senior Full Stack Developer', text:'More than 5 years full stack experience. Knowledge stack: HTML, CSS, SASS, Java, Next js, React, Redux, Javascript, Typescript, Nest js, Express, Docker Compose.'},
        {id:5,num:img4,title:'Mark - Senior Backend Developer', text:'Over 7 years of server application development. Knowledge stack: C++, C#, GoLang, Ruby, Clojure, Node js, Express, Nest js, PHP.'},
        {id:6,num:img5,title:'Alex - Senior Front End Developer', text:'Over 10 years experience in website development and design. Knowledge stack: Next js, HTML, CSS, SASS, LESS, React, Redux, Javascript, Typescript, Strapi, Sanity, PHP, Figma'},
       /*  {num:'003',title:'Nest Js', text:'NestJS is a framework for building efficient, scalable Node. js web applications. It uses modern JavaScript and is built with TypeScript.'},
        {num:'004',title:'Node & Express', text:'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.'},
        {num:'005',title:'GraphQL', text:'GraphQL lets developers construct requests that pull data from multiple data sources in a single API call.'},
        {num:'006',title:'Kubernetes', text:'Kubernetes is a platform for running and managing containers from many container runtimes.'},
        {num:'007',title:'Docker', text:'Docker is a platform designed to help developers build, share, and run modern applications.'},
        {num:'008',title:'AWS & GCP', text:'Moving to the cloud is giving organizations of all shapes and sizes the ability to move faster, be more agile, and innovate their businesses.'},
        {num:'009',title:'GoLang', text:'Golang is useful for carrying out programming for scalable servers and large software systems.'}, */
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
                                            <h2 className={styles.h2}>See our experienced developers</h2>
                                        </FadeInSectionL>
                                    </div>
                                </div>
                                <div className="row">
                                         {useTechs.map(el=>(
                                            <AboutInside {...el} key={el.id}/>
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

export default SecondAbout
