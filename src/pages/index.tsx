import styles from '../styles/Home.module.css'

import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import { SlEnvolope } from "react-icons/sl";

import Container from 'react-bootstrap/Container';
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
          <Container className={styles.container} fluid>
            <h1 className={styles.title}>Olá.</h1>
            <p className={styles.subtitle}>
              Me chamo Giovani, sou um desenvolvedor web capaz de criar
            aplicações web e apps
            </p>
          </Container>
          <Card />
      </section>
      <section>
        <div>
          <div>
            <h1>Meus projetos</h1>
            <h2>Veja no que estou trabalhando atualmente</h2>
            <Carrossel />
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <h1>Se interessou?</h1>
            <h2>Fale comigo, melhor ainda se pudermos tomar um café</h2>
            <button>
            <Link href={"/contato"}><SlEnvolope />Fale Comigo</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
