import styles from '@/styles/Home.module.css'

export default function About () {
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
        </header>
        
        <h2 className={styles.wrapper}>Тут пример работы и объяснение формул</h2>



        </>
    )
}