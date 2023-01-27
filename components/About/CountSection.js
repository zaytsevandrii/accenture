import React from "react"
import Counter from "./Counter"
import styles from '../../styles/About.module.scss'
const CountSection = () => {
  const data = [
    {
        id: 1,
        target: 92,
        span: "CLIENT RETENTION RATE",
        text: "Our clients are constantly coming back to us with their new projects and recommend us to their friends.",
    },
    {
        id: 2,
        target: 26,
        span: "TEAM MEMBERS",
        text: "Our team is constantly growing, and we have in-house specialists for every service we provide.",
    },
    {
        id: 3,
        target: 90,
        span: "FULL-CIRCLE SERVICES",
        text: "We perform integrated services, starting from development and ending with marketing promotion.",
    },
    {
        id: 4,
        target: 7,
        span: "YRS EXPERIENCE",
        text: "Our team consists of high-profile specialists with 7+ years of experience in their field.",
    },
]
    return (
        <section className={styles.counter}>
            <div className="container s-padding invert">
                <div className="counter__item-row row">
                    
                    {data.map((el) => (
                    <Counter key={el.id} {...el} id={el.id}/>
                ))}
                   {/*  <div className="counter__item col-12 col-sm-6 col-lg-3">
                        <div className="counter__item-number">
                            <span className="js-counter" data-count="20"></span>
                            <span className="symbol">+</span>
                        </div>
                        <h6> TEAM MEMBERS</h6>
                        <p> Our team is constantly growing, and we have in-house specialists for every service we provide.</p>
                    </div>
                    <div className="counter__item col-12 col-sm-6 col-lg-3">
                        <div className="counter__item-number">
                            <span className="js-counter" data-count="78"></span>
                            <span className="symbol">%</span>
                        </div>
                        <h6> FULL-CIRCLE SERVICES</h6>
                        <p>
                            In most cases, we perform integrated services, starting from the development and ending with marketing
                            promotion.
                        </p>
                    </div>
                    <div className="counter__item col-12 col-sm-6 col-lg-3">
                        <div className="counter__item-number">
                            <span className="js-counter" data-count="8"></span>
                            <span className="symbol">+</span>
                        </div>
                        <h6> YRS NICHE EXPERIENCE</h6>
                        <p>
                            Our team consists of high-profile certified specialists with 5+ years of experience in their field.
                        </p>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default CountSection
