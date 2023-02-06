import styles from '../styles/Card.module.css'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import { SlScreenDesktop } from "react-icons/sl";

export default function () {
    return (
        <div>
            <Container className={styles.competencias}> 
                <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src=''/><SlScreenDesktop className={styles.imgcard}/>
                    <Card.Body>
                        <Card.Title>Desenvolvedor Back-End</Card.Title>
                        <Card.Text>
                            Linguagens:
                            <p>Next.js, Python e SQL</p>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src=""/><SlScreenDesktop className={styles.imgcard}/>
                    <Card.Body>
                        <Card.Title>Desenvolvedor Front-End</Card.Title>
                        <Card.Text>
                            Linguagens:
                            <p>HTML, CSS e Git</p>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src=""/><SlScreenDesktop className={styles.imgcard}/>
                    <Card.Body>
                        <Card.Title>Desenvolvedor Back-End</Card.Title>
                        <Card.Text>
                        Linguagens:
                            <p>HTML, CSS e Git</p>  
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
