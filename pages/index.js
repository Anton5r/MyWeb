import Head from 'next/head'
import styles from '../styles/Home.module.css'


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
                  <a href='../about/laba'>Лаба по Груздю</a>
              </div>
          </div>
      </header>

    <div className={styles.flexcontainer}>
      <h1>Привет 👋</h1>
      <h1>В скором времени появится игра на сайте!</h1>
    </div>
    </>
  )
}
