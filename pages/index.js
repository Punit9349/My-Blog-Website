import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  const img = "/homeimg2.jpg";
  return (
    <div className={styles.container}>
         <style jsx>
          {`
              .part1{
                background-image: url(${img});
                background-size: cover;
                padding-top:0px;
                margin-top:60px;
                box-shadow: 0 2px 2px -2px rgba(0,0,0,.4);
              }

              .title1{
                padding-top:47px;
              }


          `}
        </style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="next, blog, hunting coder blog, next js" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script src="https://kit.fontawesome.com/004c7e6d5b.js" crossorigin="anonymous"></script> */}
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"/> */}
      </Head>
      {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script> */}
      <Navbar/>

      <div className="part1">

      <main className={styles.main}>
        <h1 className="title1">
          <span className='myspan'>Hunting Coder</span>
        </h1>

        {/* <Image className={styles.myImg} src="/homeimg.jpg" width={237} height={158} /> */}

        <p className={styles.description}>
          A Blog for Hunting coders by the hunting coder
        </p>

        </main>

        </div>
        
        <div className={styles.quote}>
        {/* <i className="fa-solid fa-quote-left" ></i> */}
        <img src="/quoteicon1.png" className={styles.iconq} />
          <p className={styles.quotetxt}>"Coding is today's language of creativity. All our children deserve a chance to become creators instead consumers of computer science"
          </p>

          <p className={styles.quotetxt1}>-Maria Klawe</p>
         
        </div>

        <div className={styles.blogitem}>

        <div>
          <h2 className={styles.blogg}>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How to learn javascript in 2022?</h3>
            <p>Javascript is language used to design logic for the web.</p>
          </div>  
        </div>

        <div className={styles.blog}>
          <div className={styles.blogitem}>
            <h3>How to learn javascript in 2022?</h3>
            <p>Javascript is language used to design logic for the web.</p>
          </div>
        </div>

        <div className={styles.blog}>
          <div className={styles.blogitem}>
            <h3>How to learn javascript in 2022?</h3>
            <p>Javascript is language used to design logic for the web.</p>
          </div>
        </div>

        <div className={styles.blog}>
          <div className={styles.blogitem}>
            <h3>How to learn javascript in 2022?</h3>
            <p>Javascript is language used to design logic for the web.</p>
          </div>
        </div>

        </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright @ Coding hunters
          {/* Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </a>
      </footer>
    </div>
  )
}
