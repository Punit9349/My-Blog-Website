import React from 'react'
import Link from 'next/link'
import styles from '../styles/latestblog.module.css'

const latestblogs = () => {
  return (
    <div className={styles.body}>
        <h1 className={styles.h1}>Latest Blogs</h1>
        <div className={styles.container}>

          <Link href='/blogpost/blog1'>
            <div className={styles.blog}>
            
                <picture><img className={styles.myImg} src="/homeimg2.jpg" alt="" /></picture>
                <div className={styles.boxd}>
                <h4><b>Lets build a sorting visualizer using react</b></h4>
                </div>

            </div>

            </Link>
            <div className={styles.blog}>
            
                <picture><img className={styles.myImg} src="/P2.jpg" alt="" /></picture>
                <div className={styles.boxd}>
                <h4><b>Lets build a sorting visualizer using react</b></h4>
                </div>

            </div>
            <div className={styles.blog}>
            
                <picture><img className={styles.myImg} src="/homeimg.jpg" alt="" /></picture>
                <div className={styles.boxd}>
                <h4><b>Lets build a sorting visualizer using react</b></h4>
                </div>

            </div>
            <div className={styles.blog}>
            
                <picture><img className={styles.myImg} src="/homeimg.jpg" alt="" /></picture>
                <div className={styles.boxd}>
                <h4><b>Lets build a sorting visualizer using react</b></h4>
                </div>

            </div>
            <div className={styles.blog}>
            
                <picture><img className={styles.myImg} src="/homeimg.jpg" alt="" /></picture>
                <div className={styles.boxd}>
                <h4><b>Lets build a sorting visualizer using react</b></h4>
                </div>

            </div>
            <div className={styles.blog}>
            
                <picture><img className={styles.myImg} src="/homeimg.jpg" alt="" /></picture>
                <div className={styles.boxd}>
                <h4><b>Lets build a sorting visualizer using react</b></h4>
                </div>

            </div>
           
        </div>
    </div>
  )
}

export default latestblogs