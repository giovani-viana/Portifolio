import Link from "next/link"
import Image from 'next/image'

import styles from '../styles/Navbar.module.css'

export default function () {
    return (
        <nav className={styles.navbar}>
            <Link href={"/"}><Image src="/Images/Logo.png"
                width={60}
                height={50}
                alt='' /></Link>
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
