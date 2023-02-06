import Link from "next/link"

import styles from '../styles/Navbar.module.css'

export default function () {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.lista}>
                <li className={styles.item}>
                    <Link href={"/contato"}>
                        Contato
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
