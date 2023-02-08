import styles from '../styles/Card.module.css'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import { MdOutlineDvr, MdOutlineStorage } from "react-icons/md";

export default function () {
    return (
        <>
            <Container className={styles.competencias}> 
                <Card style={{ width: '18rem' }} className={styles.all}>
                 <Card.Img variant="top" src=''/><MdOutlineStorage className={styles.imgcard}/>
                    <Card.Body>
                        <Card.Title>Desenvolvedor Back-End</Card.Title>
                        <Card.Text>
                            Linguagens: <br></br>
                            Next.js, Python e SQL
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div className={styles.separar}></div>
                <Card style={{ width: '18rem' }} className={styles.all}>
                    <Card.Img variant="top" src=""/><MdOutlineDvr className={styles.imgcard}/>
                    <Card.Body>
                        <Card.Title>Desenvolvedor Front-End</Card.Title>
                        <Card.Text>
                            Linguagens:<br></br>
                            HTML, CSS e Git
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}
