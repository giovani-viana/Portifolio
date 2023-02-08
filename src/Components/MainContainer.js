import Navbar from './navbar'
import Footer from './footer'

import styles from '../styles/MainContainer.module.css'

export default function MainContainer({ children }) {
    return (
        <div className={styles.fullContainer}>
            <Navbar />
            <div className={styles.MainContainer}> {children} </div>
            <Footer />
        </div>
    )
}