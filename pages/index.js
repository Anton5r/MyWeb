import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import qrcode from '../public/qrcode.png'
import vk from '../public/vk.png'


export default function Home() {
  return (
    <>
      <Head>
        <title>Главная</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.flexcontainer}>Сайт временно закрыт</h1>
      
      <div className={styles.flexcontainer}>
      <p> Посетители</p>
      <img
      src="https://iplogger.org/ZdJba"
      alt="new"
      />
      </div>

    </>
  )

  
}
