import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="next, blog, hunting coder blog, next js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <script src='/sc.js' strategy="lazyOnload"></script> */}

      <nav className={styles.mainnav}>
        <ul>
          <Link href='/' >
             <a><li>Home</li></a>
           </Link>

          <Link href='/about' >
             <a><li>About</li></a>
           </Link>

          <Link href='/blog' > 
             <a><li>Blog</li> </a>
          </Link>

          <Link href='/contact' >
            <a><li>Contact</li></a>
           </Link>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hunting Coder
        </h1>

        <p className={styles.description}>
          A Blog for Hunting coders by the hunting coder
        </p>

        <div className="blogs">
          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How to learn javascript in 2022?</h3>
            <p>Javascript is language used to design logic for the web.</p>
          </div>
        </div>

        <div className="blogs">
          <div className="blogItem">
            <h3>How to learn javascript in 2022?</h3>
            <p>Javascript is language used to design logic for the web.</p>
          </div>
        </div>

        <div className="blogs">
          <div className="blogItem">
            <h3>How to learn javascript in 2022?</h3>
            <p>Javascript is language used to design logic for the web.</p>
          </div>
        </div>

        <div className="blogs">
          <div className="blogItem">
            <h3>How to learn javascript in 2022?</h3>
            <p>Javascript is language used to design logic for the web.</p>
          </div>
        </div>

      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
