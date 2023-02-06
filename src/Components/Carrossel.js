import styles from '../styles/Home.module.css'

import Carousel from 'react-bootstrap/Carousel';

export default function Carrossel() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className={styles.img1}
                    src="/Images/teste2.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Calculadora de ICMS</h3>
                    <p>Uma aplicação que auxilia o cálculo de um imposto</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={styles.img2}
                    src="/Images/teste2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Site Reggae</h3>
                    <p>Um site desenvolvido para um cliente com o objetivo de <br></br> 
                    divulgar sobre o reggae nacional</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
