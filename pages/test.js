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
      
      <header className={styles.header}>
          <div>
              <a href="https://urtt.ru" className={styles.logo}>УРТК.ру</a>
              <div className={styles.headerr}>
                  <a href="../">Главная</a>
                  <a href="../posts">Лабы по Кс</a>
                  <a href="../about/about">Тфу-пдф</a>
                  <a href="../ter ">Тер-Вер</a>
                  <a href="../test">Тест</a>
              </div>
          </div>
      </header>

      <h1 className={styles.flex_text}>ответы на экзамен по электротехники</h1>

      <p>Вопросы:</p>
      <p>1) Электрическое поле. Напряженность электрического поля - это векторная физическая величина, характеризующая электрическое поле в данной точке и равная отношению силы F →, действующей на неподвижный малый по величине точечный заряд, помещённый в данную точку, к величине этого заряда q*</p>
      <p>2) Закон Кулона - это физический закон, описывающий взаимодействие между двумя неподвижными точечными электрическими зарядами в вакууме. Сила, с которой заряд q1 действует на заряд q2, согласно этому закону находится (в СИ) как</p>
      <div className={styles.imag}>
        <Image
        src={zacon}
        width={300}
        height={60}
        alt="Picture of the author"
        />
      </div>

      <p>3) Таблица степеней(русский, латинский)</p>
      <div className={styles.imag}>
        <Image
        src={t1}
        width={500}
        alt="Error 404"
        />
      </div>
      <div className={styles.imag}>
        <Image
        src={t2}
        height={300}
        />
      </div>

      <p>4) Последовательное соединение резисторов - это это соединение двух или более резисторов в форме цепи, в которой каждый отдельный резистор соединяется с другим отдельным резистором только в одной точке. Общее сопротивление R общ. При таком соединении, через все резисторы проходит один и тот же электрический ток.
      Чем больше элементов на данном участке электрической цепи, тем «труднее» току протекать через него.</p>
      <div className={styles.flex_text}>
        <Image
        src={rez}
        width={350}
        height={50}
        alt="Error 404"
        />
      </div>
      <div className={styles.flex_text}>
        <Image
        src={kat}
        width={400}
        height={100}
        alt="Error 404"
        />
      </div>

    </>
  )
}


