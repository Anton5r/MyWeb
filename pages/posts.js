import styles from '@/styles/Home.module.css'
import Head from 'next/head'

export default function Posts () {
    return (
        <>

        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className={styles.header}>
            <div>
                <a href="https://urtt.ru" className={styles.logo}>УРТК.ру</a>
                <div className={styles.headerr}>
                    <a href="../">Home</a>
                    <a href="../posts">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
        </header>

        <h1 className={styles.wrapper}>Posts Lists: </h1>
        
        </>
    )
}