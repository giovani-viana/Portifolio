import styles from '../styles/Contato.module.css'

import Head from "next/head"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Container from 'react-bootstrap/Container';

export default function Contato() {
    return (
        <Container fluid className={styles.contatoContainer}>
            <Head>
                <title>Contato</title>
            </Head>
            <h1> Contato </h1>
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="name" placeholder="Nome" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="email" placeholder="E-mail" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder='Mensagem'/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </Container>
        </Container>
    )
}