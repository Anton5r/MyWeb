import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import styles from '../styles/Home.module.css';
import React from 'react';
import ChatwootWidget from './testbot'

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className={styles.header}>
          <div>
              {/* <a href="https://urtt.ru" className={styles.logo}>УРТК.ру</a> */}
              <div className={styles.headerr}>
                  <a href="../">Главная</a>
                  <a href="../posts">Лабы</a>
              </div>
          </div>
      </header>

      <Component {...pageProps} />
      <Analytics />
      {/* <ChatwootWidget/> */}
    </>
  );
}