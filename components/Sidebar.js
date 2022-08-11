import React from 'react'
import styles from '../styles/Sidebar.module.css'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className={styles.body}>
        <div className={styles.navside}>
            <ul>

              <Link href='/blogpost/blog1' >
               <a><li>Dp1</li></a>
              </Link>
              
              <Link href='/' >
               <a><li>DP2</li></a>
              </Link>

              <Link href='/' >
               <a><li>DP3</li></a>
              </Link>

              <Link href='/' >
               <a><li>DP4</li></a>
              </Link>

              <Link href='/' >
               <a><li>Home</li></a>
              </Link>

              <Link href='/' >
               <a><li>Home</li></a>
              </Link>

              <Link href='/' >
               <a><li>Home</li></a>
              </Link>

              <Link href='/' >
               <a><li>Home</li></a>
              </Link>

              <Link href='/' >
               <a><li>Home</li></a>
              </Link>

              <Link href='/' >
               <a><li>Home</li></a>
              </Link>

              <Link href='/' >
               <a><li>Home</li></a>
              </Link>

              <Link href='/' >
               <a><li>Home</li></a>
              </Link>

              <Link href='/' >
               <a><li>Home</li></a>
              </Link>

              <Link href='/' >
               <a><li>Home</li></a>
              </Link>

              <Link href='/' >
               <a><li>Home</li></a>
              </Link>

              <Link href='/' >
               <a><li>Home</li></a>
              </Link>

              <Link href='/' >
               <a><li>Home</li></a>
              </Link>

              <Link href='/' >
               <a><li>Home</li></a>
              </Link>

              <Link href='/' >
               <a><li>Home</li></a>
              </Link>

              <Link href='/' >
               <a><li>Home</li></a>
              </Link>

              <Link href='/' >
               <a><li>Home</li></a>
              </Link>

            </ul>
        </div>
    </div>
  )
}

export default Sidebar