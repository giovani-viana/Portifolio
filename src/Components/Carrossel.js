import styles from '../styles/Home.module.css'

import Carousel from 'react-bootstrap/Carousel';

export default function Carrossel() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className={styles.img1}
                    src="/Images/teste1.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={styles.img2}
                    src="/Images/teste2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
