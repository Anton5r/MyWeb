import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";
import Image from 'next/image';
import zacon from '../public/Закон кулона.jpg'
import tab from '../public/таблица-степеней.jpg'
import rez from '../public/резистор.png'
import kat from '../public/Катушка.png'
import t1 from '../public/таб-1.jpg'
import t2 from '../public/таб-2.jpg'

export default function TEST() {

  return (
    <>
      <Head>
        <title>Главная</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </Head>

      <h2 className={styles.text}>Педложение по обновление сайта</h2>
    </>
  )
}


