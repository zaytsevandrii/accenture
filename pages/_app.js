import Navigate from "../components/Navigate"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/globals.scss"
import { Provider } from "react-redux"
import { store } from "../redux/store"

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Navigate>
                <Component {...pageProps} />
            </Navigate>
        </Provider>
    )
}

export default MyApp
