import Navigate from "../components/Navigate"
import 'bootstrap/dist/css/bootstrap.css'
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
    return (
        <Navigate>
            <Component {...pageProps} />
        </Navigate>
    )
}

export default MyApp
