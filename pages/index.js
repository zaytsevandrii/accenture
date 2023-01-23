import Head from "next/head"
import PropgressNav from "../components/PropgressNav"
import styles from "../styles/Home.module.scss"
import Carousel from "react-bootstrap/Carousel"
import Wemake from "../components/MainPage/Wemake"
import ChooseUs from "../components/MainPage/ChooseUs"
export default function Home() {
    console.log("render")
    return (
        <>
            <div className={styles.container}>
                {/* <div className={styles.videoText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sint libero eaque incidunt officiis modi!
                </div> */}
                <Carousel interval={3900}>
                    <Carousel.Item>
                        <video autoPlay loop muted>
                            <source
                                src="https://www.accenture.com/t00010101T000000Z__w__/gb-en/_acnmedia/Thought-Leadership-Assets/Videos/Accenture-Maturity-Index-Marquee-Video-1920x1080.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <Carousel.Caption className={styles.videoText}>
                            <h1>We create effective websites for your business</h1>
                            <p>Build the fastest website</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <video autoPlay loop muted>
                            <source
                                src="https://www.accenture.com/t00010101T000000Z__w__/gb-en/_acnmedia/Thought-Leadership-Assets/Videos-2/Accenture-Tech-Vision-2022-Marquee.mp4%22%20type=%22video/mp4"
                                type="video/mp4"
                            />
                        </video>
                        <Carousel.Caption className={styles.videoText}>
                            <h1>New Technology Vision</h1>
                            <p>Dimax media. Meet me in the metaverse</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <video autoPlay loop muted>
                            <source
                                src="https://www.accenture.com/t00010101T000000Z__w__/gb-en/_acnmedia/Thought-Leadership-Assets/Videos-2/Accenture-CFEEA-Campaign-video.mp4%22%20type=%22video/mp4"
                                type="video/mp4"
                            />
                        </video>
                        <Carousel.Caption className={styles.videoText}>
                            <h1>We choose only modern and fast technologies in development</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <video autoPlay loop muted>
                            <source
                                src="https://www.accenture.com/t00010101T000000Z__w__/gb-en/_acnmedia/Thought-Leadership-Assets/Videos-2/Accenture-IndustryX-Marquee-video-1080x1920.mp4%22%20type=%22video/mp4"
                                type="video/mp4"
                            />
                        </video>
                        <Carousel.Caption className={styles.videoText}>
                            <h1>Digitise what you make. Revolutionise how you make it.</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Wemake />
                <ChooseUs/>
                <h1>My page</h1>
                <h1>My page</h1>
                <h1>My page</h1>
                <h1>My page</h1>
                <h1>My page</h1>
                <h1>My page</h1>
                <h1>My page</h1>
                <h1>My page</h1>
                <h1>My page</h1>
            </div>
        </>
    )
}
