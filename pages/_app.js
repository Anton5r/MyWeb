import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import qrcode from '../public/qrcode.png'

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className={styles.header}>
          <div>
              <a href="https://urtt.ru" className={styles.logo}>УРТК.ру</a>
              <div className={styles.headerr}>
                  <a href="../">Главная</a>
                  <a href="../posts">Кс</a>
                  <a href="../about/about">Тфу-пдф</a>
                  <a href="../ter ">Тер-Вер</a>
                  <a href='../about/laba'>Лаба по Груздю</a>
                  <a href="../test">Обновление</a>
              </div>
          </div>
      </header>

      <Component {...pageProps} />
      <Analytics />
    </>
  );
  
}
