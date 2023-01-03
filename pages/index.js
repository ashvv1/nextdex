import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>NEXT POKEDEX</title>
        <meta name="description" content="A pokedex made using Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link href="/pokemon">NEXT.js POKEDEX</Link>
        <div className={styles.grid}>
          <a
            href="./pokemon"
            className={styles.card}
            target="_current"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Pokemon <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Get information on more than 1000 different pokemon!
            </p>
          </a>
        </div>
      </main>

    </>
  )
}
