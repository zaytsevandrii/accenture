import Link from "next/link"
import React from "react"
import styles from "../../styles/Home.module.scss"

const Wemake = () => {
    return (
        <div>
            <ul className={styles.list}>
                <div>
                    <li>E-commerce</li>
                    <p>We ease and accelerate work of an online store using special tools.</p>
                    <Link href="/">To learn more</Link>
                    <hr />
                </div>
                <div>
                    <li>Corporate WebSites</li>
                    <p>We design corporate projects of different complexity and scale.</p>
                    <Link href="/">To learn more</Link>
                    <hr />
                </div>
                <div>
                    <li>Landing page</li>
                    <p>We create profitable landing pages with eye-catching designs and peak conversion.</p>
                    <Link href="/">To learn more</Link>
                    <hr />
                </div>
                <div>
                    <li>Business WebSite</li>
                    <p>We help businesses to build proper positioning for the expansion of partner’s and client’s networks.</p>
                    <Link href="/">To learn more</Link>
                    <hr />
                </div>
                <div>
                    <li>Website Design</li>
                    <p>We use bold and straightforward decisions that will make you stand out among competitors and will be catchy for users.</p>
                    <Link href="/">To learn more</Link>
                    <hr />
                </div>
                <div>
                    <li>Business Card</li>
                    <p>We pay particular attention to creating an emotional and bright brand impression.</p>
                    <Link href="/">To learn more</Link>
                    <hr />
                </div>
            </ul>
        </div>
    )
}

export default Wemake
