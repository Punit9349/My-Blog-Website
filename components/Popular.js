import React from 'react'
import styles from '../styles/Popular.module.css'

const Popular = () => {
  return (
    <div>

          <h2 className={styles.blogg}>Popular Blogs</h2>
          <div className={styles.course}>

            <div className={styles.card}>
            <picture><img className={styles.myImg} src="/P1.png" alt="" width="345px" height="213px"/></picture>
            <div className={styles.container}>
              <h4><b>DP-1/ Fibonacci series</b></h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sequi illo sed qui provident perferendis ab consequatur incidunt repellat.</p>
              <a><button className={styles.button}>Read More</button></a>
            </div>
            </div>

            <div className={styles.card}>
            <picture><img className={styles.myImg} src="/P2.jpg" alt="" width="345px" height="213px"/></picture>
            <div className={styles.container}>
              <h4><b>Dp-2/ climbing stairs</b></h4>
              <p>Lorem ipsum dolor sit amet consec tetur adipisicing elit. Nobis sequi illo sed qui provident perferendis ab consequatur incidunt repellat.</p>
              <a><button className={styles.button}>Read More</button></a>
            </div>
            </div>

            <div className={styles.card}>
            <picture><img className={styles.myImg} src="/P2.jpg" alt="" width="345px" height="213px"/></picture>
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