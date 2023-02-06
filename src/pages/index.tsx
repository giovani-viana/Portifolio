import styles from '../styles/Home.module.css'

import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import { SlEnvolope } from "react-icons/sl";

import Container from 'react-bootstrap/Container';
import Carrossel from '../Components/Carrossel';
import Card from '../Components/Card';

export default function Home() {
  return (
    <>
      <Head>
        <title>Giovani Viana | Dev</title>
        <meta name='keywords' content='FullStack, Work, Dev'></meta>
        <meta name='description' content='A procura de um emprego'></meta>
      </Head>
      <section>
        <div>
          <h1 className={styles.title}>Desenvolvedor Web</h1>
          <h2 className={styles.subtitle}>Codo aplicações web e apps</h2>
        </div>
        <Image src="/Images/Dev.svg"
          width={300}
          height={300}
          alt='Imagem do pc' />
      </section>
      <section>
          <Container className={styles.container} fluid>
            <h1 className={styles.presmain}>Muito prazer, me chamo Giovani</h1>
            <h2 className={styles.presub}>Iniciei minha carreira de desenvolvedor web após entrar para a empresa junior do meu curso, desde então 
              venho procurando evoluir cada vez mais como desenvolvedor. 
            </h2>
          </Container>
      </section>
      <section>
        <div>
          <div>
            <h1>Meus projetos</h1>
            <h2>Aqui estão alguams coisas que eu fiz ou estou fazendo</h2>
            <Carrossel />
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <h1>Experiências</h1>
            <h2>Sou muito grato a essa empresa por te me dado tantas oportunidades</h2>
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
