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

    <div className={styles.flexcontainer}>
      <h1>В скором времени появится ответы на экзамен!</h1>
    </div>




      <div className={styles.qrcode}>
        <Image 
        src={vk}
        width={100}
        alt='Error Qr-code'
        />
        <Image
          className={styles.qrcode_vk}
          src={qrcode}
          width={100}
          alt='Error-Qr code'
        />
      </div>

    </>
  )
}
