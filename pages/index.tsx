import Head from 'next/head'
import Image from 'next/image'
import { Grandstander } from '@next/font/google'
import styles from '@/styles/Home.module.css'


const grandstander = Grandstander({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <Head>
        <title>Updog Treats</title>
        <meta name="description" content="hyper local healthy dog treats" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          
          
          <div>
            
              By{' '}
              <Image
                src=""
                alt="Updog Logo"
                className={styles.vercelLogo}
                width={0}
                height={0}
                priority
              />
            
          </div>
        </div>

        <div className={styles.center}>
          <h1>What's Up, Dog?</h1>
          <h2> — Treats. </h2>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={grandstander.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={grandstander.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={grandstander.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={grandstander.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={grandstander.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={grandstander.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={grandstander.className}>
              Deploy <span>-&gt;</span>
            </h2>r
            <p className={grandstander.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
