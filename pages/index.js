import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Script from 'next/script'


export default function Home() {
  return (
    <>
      <Head>
        <title>Главная</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      
      <header className={styles.header}>
          <div>
              <a href="https://urtt.ru" className={styles.logo}>УРТК.ру</a>
              <div className={styles.headerr}>
                  <a href="../">Главная</a>
                  <a href="../posts">Лабы по Кс</a>
                  <a href="../about/about">Тфу-пдф</a>
                  <a href="../ter ">Тер-Вер</a>
                  <a href="../test">Тест</a>
                  <a href='../about/test'>test jsx</a>
              </div>
          </div>
      </header>

      <h3 className={styles.wrapper}>Это Офф сайт, теперь он будет в разработке, может быть с багами ;)</h3><br/>
      <h3 className={styles.wrapper}> Свои пожелание можите писть в эот документ<a className={styles.linkp} href='https://docs.google.com/document/d/1bLCrUSJLMVvlqmtuWQTLDH5-fipGSvAw9_s55L0g2Wc/edit?usp=share_link'>ТЫК</a></h3>

    </>
  )
}
