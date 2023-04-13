import styles from '../styles/Home.module.css'

export default function Ter () {
    return (
        <>
        <header className={styles.header}>
          <div>
              <a href="https://urtt.ru" className={styles.logo}>УРТК.ру</a>
              <div className={styles.headerr}>
                  <a href="../">Главная</a>
                  <a href="../posts">Лабы по Кс</a>
                  <a href="../about/about">Тфу-пдф</a>
                  <a href="../ter ">Тер-Вер</a>
              </div>
          </div>

        <h1 className={styles.linkp}>Полезные ссылки:</h1>
        <p style={{textAlign: 'center'}} ><a href='https://allcalc.ru/node/1836?ysclid=lgeogl65lq704574969'>Калькулятор для Дисперсии</a></p>

        </header>
        </>
    )
}