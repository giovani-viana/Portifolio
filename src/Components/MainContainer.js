import Navbar from './navbar'
import Footer from './footer'

import styles from '../styles/MainContainer.module.css'

export default function MainContainer({ children }) {
    return (
        <div>
            <Navbar />
            <div className={styles.container}> {children} </div>
            <Footer />
        </div>
    )
}