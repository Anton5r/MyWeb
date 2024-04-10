import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import v1 from '../public/1.jpg'
import v2 from '../public/2.jpg'
import v3 from '../public/3.jpg'



export default function Home() {
  return (
    <>
      <Head>
        <title>Главная</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.flexcontainer}>❗❗Если есть уже выполненые лабы и вы готовы делиться кидайте мне :)❗❗</h1>
    </>
  )

  
}
