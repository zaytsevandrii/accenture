import styles from "../styles/Home.module.scss"
import Carousel from "react-bootstrap/Carousel"
import Wemake from "../components/MainPage/Wemake"
import ChooseUs from "../components/MainPage/ChooseUs"
export default function Home() {
   
    console.log("render")
    return (
        <>

            <div className={styles.container}>
                <Carousel interval={3900}>
                    <Carousel.Item>
                        <video autoPlay loop muted>
                            <source
                                src="https://firebasestorage.googleapis.com/v0/b/dimax-f1bfc.appspot.com/o/Maturity-Index-Marquee-Video-1920x1080.mp4?alt=media&token=e0fee0e3-a01f-4213-880a-9789d3824e1f"
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
                                src="https://firebasestorage.googleapis.com/v0/b/dimax-f1bfc.appspot.com/o/Tech-Vision-2022-Marquee.mp4?alt=media&token=69b1bc11-a1c0-4113-8ef8-4b2d6ddfa3ec"
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
                                src="https://firebasestorage.googleapis.com/v0/b/dimax-f1bfc.appspot.com/o/CFEEA-Campaign-video.mp4?alt=media&token=b79f7a94-78f3-4971-9c55-a19bc0ec407f"
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
                                src="https://firebasestorage.googleapis.com/v0/b/dimax-f1bfc.appspot.com/o/IndustryX-Marquee-video-1080x1920.mp4?alt=media&token=41d638fb-60b4-4c37-bf53-e9c1bad18bc7"
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
            </div>
        </>
    )
}
