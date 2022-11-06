import Head from "next/head"
import { useEffect, useRef } from "react"
import { CarouselComponent } from "@syncfusion/ej2-react-navigations"
import PropgressNav from "../components/PropgressNav"
import styles from "../styles/Home.module.scss"

export default function Home() {
    return (
        <>
            <PropgressNav />
            <div className={styles.container}>
                <div className={styles.videoText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sint libero eaque incidunt officiis modi!
                </div>
                <video autoPlay loop muted>
                    <source
                        src="https://www.accenture.com/t00010101T000000Z__w__/gb-en/_acnmedia/Thought-Leadership-Assets/Videos/Accenture-Maturity-Index-Marquee-Video-1920x1080.mp4"
                        type="video/mp4"
                    />
                </video>
                <video autoPlay loop muted>
                    <source
                        src="https://www.accenture.com/t00010101T000000Z__w__/gb-en/_acnmedia/Thought-Leadership-Assets/Videos-2/Accenture-Tech-Vision-2022-Marquee.mp4%22%20type=%22video/mp4"
                        type="video/mp4"
                    />
                </video>
                <h1>My page</h1>
            </div>

        </>
    )
}
