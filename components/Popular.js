import React from 'react'
import styles from '../styles/Popular.module.css'
import Link from 'next/link'

const Popular = () => {
  return (
    <div className={styles.div1}>

          <h2 className={styles.blogg}>Popular Blogs</h2>
          <div className={styles.course}>

            <div className={styles.card}>
            <picture><img className={styles.myImg} src="/P1.png" alt="" height="213px"/></picture>
            <div className={styles.container}>
              <h4><b>DP-1/ Fibonacci series</b></h4>
              <p>The Fibonacci numbers are the numbers in the following integer sequence. 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..</p>
              <Link href='/blogpost/blog1'><a><button className={styles.button}> Read More </button></a></Link>
            </div>
            </div>

            <div className={styles.card}>
            <picture><img className={styles.myImg} src="/P2.jpg" alt="" height="213px"/></picture>
            <div className={styles.container}>
              <h4><b>Dp-2/ climbing stairs</b></h4>
              <p>Lorem ipsum dolor sit amet consec tetur adipisicing elit. Nobis sequi illo sed qui provident perferendis ab consequatur incidunt repellat.</p>
              <a><button className={styles.button}>Read More</button></a>
            </div>
            </div>

            <div className={styles.card}>
            <picture><img className={styles.myImg} src="/P2.jpg" alt="" height="213px"/></picture>
            <div className={styles.container}>
              <h4><b>DP-3/Min cost climbing stairs</b></h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sequi illo sed qui provident perferendis ab consequatur incidunt repellat.</p>
              <a><button className={styles.button}>Read More</button></a>
            </div>
            </div>

           

        
    
          
    
        </div>
    </div>
  )
}

export default Popular