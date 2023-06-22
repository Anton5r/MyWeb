import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import qrcode from '../public/qrcode.png'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />

      <div className={styles.qrcode}>
        <Image
        src={qrcode}
        width={100}
        alt='Error-Qr code'
        />
      </div>
    </>
  );
  
}
