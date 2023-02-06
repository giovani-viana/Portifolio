import Link from "next/link"

import styles from '../styles/Footer.module.css'

import { SlSocialLinkedin, SlSocialGithub, SlSpeech } from "react-icons/sl";

export default function () {
    return (
    <div className={styles.footer}>
        <ul>
            <li className={styles.fitem}>
                <Link href={"https://www.linkedin.com/in/giovaniviana/"} target="_blank">
                    <SlSocialLinkedin />
                </Link>
            </li>
            <li className={styles.fitem}>
                <Link href={"https://www.linkedin.com/in/giovaniviana/"} target="_blank">
                    <SlSocialGithub />
                </Link>
            </li>
            <li className={styles.fitem}>
                <Link href={"https://www.linkedin.com/in/giovaniviana/"} target="_blank">
                    <SlSpeech />
                </Link>
            </li>
        </ul>
        <span>Portifólio Giovani Viana &copy; 2023</span>
    </div>
    )
}
