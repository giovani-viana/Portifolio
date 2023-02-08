import styles from '../styles/Home.module.css'

import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import { SlEnvolope } from "react-icons/sl";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Carrossel from '../Components/Carrossel';
import Card from '../Components/Card';

//<a href="https://www.freepik.com/free-vector/detailed-grunge-style-dusty-overlay-texture_16080132.htm#from_view=detail_author">Image by kjpargeter</a> on Freepik

export default function Home() {
  return (
    <>
      <Head>
        <title>Giovani Viana | Dev</title>
        <meta name='keywords' content='FullStack, Work, Dev'></meta>
        <meta name='description' content='A procura de um emprego'></meta>
      </Head>

      <section>
        <Container fluid className={styles.containerSec1}>
          <h1 className={styles.title}>Bem Vindo!</h1>
          <p className={styles.subtitle}>
            Prazer, me chamo Giovani, desenvolvo soluções web e aplicativos.
          </p>
          <p className={styles.subtitle}>
            estou cursando engenharia de redes de comunicação na Universidade de Brasília
          </p>
          <Card />
        </Container>   
      </section>

      <section>
        <Container>
          <h1 className={styles.title}>Meus projetos</h1>
          <p className={styles.subtitle}>Veja no que estou trabalhando atualmente</p>
          <Carrossel />
        </Container>
      </section>

      <Container className={styles.containerSec1} fluid>
        <h1 className={styles.title}>Experiências</h1>
        <p className={styles.subtitle}></p>
        <Row>
          <Col>
            <h1 className={styles.title}>EngNEt Consultoria</h1>
            <p className={styles.subtitle}>A EngNet Consultoria é uma EMPRESA JUNIOR UNIVERSITÁRIA em ENGENHARIA DE REDES DE COMUNICAÇÃO fundada no dia 06 de outubro de 2007, situada no campus universitário Darcy Ribeiro, na Universidade de Brasília.
              Como integrante do Movimento Empresa Júnior (MEJ), a EngNet Consultoria tem como objetivo fomentar a prática empreendedora de seus integrantes ao oferecer-lhes um ambiente propício ao crescimento pessoal e profissional.
              A EngNet Consultoria se destaca na sua área de atuação, seguindo sua visão de ser uma empresa de referência no mercado e na universidade, fazendo projetos que impactam, capacitando seus membros e realizando sonhos.</p>
          </Col>
          <Col><Image
            src="/Images/Janete.png"
            alt="Picture of the author"
            width={500}
            height={500}
          /></Col>
        </Row>
      </Container>

      <section>
        <div>
          <div>
            <h1 className={styles.title}>Se interessou?</h1>
            <p>Fale comigo, estou sempre dispoto para uma conversa, melhor ainda se me pagar um café</p>
            <button className={styles.buttonContacts}>
              <Link href={"/contato"} className={styles.imgContato}><SlEnvolope />Fale Comigo</Link>
            </button>
          </div>
        </div>
      </section>

    </>
  )
}
