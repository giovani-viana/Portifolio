import Link from "next/link"

import styles from '../styles/Navbar.module.css'
import { AiFillHome } from "react-icons/ai";

export default function () {
    return (
        <nav className={styles.navbar}>
            <Link href="/"><AiFillHome className={styles.ImgHome} /></Link>
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
