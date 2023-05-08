import styles from '../../styles/Home.module.css'
import pic from '../../public/tfy-1.jpg'
import pic2 from '../../public/tfy-2.jpg'
import pic3 from '../../public/tfy-3.jpg'
import pic4 from '../../public/tfy-4.jpg'
import Image from 'next/image'


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

        <p className={styles.headerp}> Новы лабы
            <a href='https://drive.google.com/drive/folders/126F_FECC5_MvtO2mDkwVvjhd5HA1CcLN?usp=sharing'>Лабы</a>
        </p>

        <h2 className={styles.wrapper}>Тут пример работы и объяснение формул</h2>
        <Image className={styles.img} src={pic} alt='Error PNG' width={600} height={750}/>
        <Image className={styles.img} src={pic2} alt='Error PNG' width={600} height={750}/>
        <Image className={styles.img} src={pic3} alt='Error PNG' width={600} height={750}/>
        <Image className={styles.img} src={pic4} alt='Error PNG' width={600} height={500}/>

        </>
    )
}
