import styles from '../styles/Home.module.css'
import Head from 'next/head'

// import React from 'react'

export default function Posts () {
    return (
        <>

        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.linkp}>
        <h3>Сделано</h3>
        <p className='sizefile'>
        <a className={styles.file} href="https://docs.google.com/document/d/1xndMF1PLf684ZFMb6WslKLbQk0P6NSx-/edit?usp=drive_link&ouid=106894929838315556260&rtpof=true&sd=true">1-Лаба</a><br/>
        <a className={styles.file} href="https://docs.google.com/document/d/1FvTaCjzMJn1wBZZhC44SSpZvp1uCK5G0/edit?usp=drive_link&ouid=106894929838315556260&rtpof=true&sd=true">2-Лаба</a><br/>
        <a className={styles.file} href="https://docs.google.com/document/d/18muqI4vWe-Jcu5u6AV6HhPAoRuc7JHBC/edit?usp=drive_link&ouid=106894929838315556260&rtpof=true&sd=true">3-Лаба</a><br/>
        <a className={styles.file} href="#">4-Лаба</a><br/>
        <a className={styles.file} href="#">5-Лаба</a><br/>
        <a className={styles.file} href="#">6-Лаба</a><br/>
        <a className={styles.file} href="#">7-Лаба</a><br/>
        </p>

        <h3>Оформление должно быть по госту</h3>
        <p className={styles.sizefile}><a className={styles.file} href="https://drive.google.com/file/d/1F9eU9P3wFFdsCjc41-pVF4U7P2CMz4rP/view?usp=sharing">ГОСТ по файлам</a></p>

        {/* <h3>У кого нет ворда то вот файл с русофикацией</h3>
        <p><a className={styles.file} href='https://www.microsoft.com/en-us/download/details.aspx?id=49117'>Сам файл</a></p>
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JJUl8r1rzqU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
        <p className={styles.sizefile}>Комманды: </p>
        <p className={styles.sizefile}>reg add "HKCU\Software\Microsoft\Office\16.0\Common\ExperimentConfigs\Ecs" /v "CountryCode" /t REG_SZ /d "std::wstring|US" /f</p>
        <p className={styles.sizefile}>.\setup.exe /configure .\configuration-Office2021Enterprise.xml</p> */}

        </div>
                
        </>
    )
}