import Head from 'next/head'
import Script from 'next/script'
// import Link from 'next/link'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Navbar from '../components/Navbar'
import Popular from '../components/Popular';

export default function Home() {
  const img = "/homeimg2.jpg";
  return (
    <>
    {/* <div className={styles.container}> */}
         <style jsx>
          {`
              .part1{
                background-image: url(${img});
                background-size: cover;
                padding-top:0px;
                margin-top:50px;
                box-shadow: 0 2px 2px -2px rgba(0,0,0,.4);
              }

          `}
        </style>
      <Head>
        <title>TechnoBlogs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="next, blog, hunting coder blog, next js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Script src="https://kit.fontawesome.com/004c7e6d5b.js" crossorigin="anonymous"></Script>
   
      {/* <Navbar/> */}

      <div className="part1">

      <main className={styles.main}>
        <h1 className={styles.title1}>
          <span className={styles.myspan}>TechnoBlogs</span>
        </h1>

        <p className={styles.description}>
          A Blog for helping coders community by providing our services and easy to understand blogs.
        </p>

        <a><button className={styles.button}>Lets Start</button></a>

      </main>

      </div>
        
        <div className={styles.quote}>
          <div className={styles.iconq1}>
        <picture><img src="/quoteicon1.png" alt="" className={styles.iconq} /></picture>
        </div>
          <p className={styles.quotetxt}>Coding is today language of creativity. All our children deserve a chance to become creators instead consumers of computer science.
          </p>

          <p className={styles.quotetxt1}>-Maria Klawe</p>
        </div>


      <Popular/>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright @ TechnoBlogs
        </a>
      </footer>
    {/* </div> */}
    </>
  )
}
