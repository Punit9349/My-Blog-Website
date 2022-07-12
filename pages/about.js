import React from 'react'
import Image from 'next/image'
import styles from '../styles/Courses.module.css'
const about = () => {
  return (
    <div className={styles.body}>
      <h1>Blogs</h1>
        <div className={styles.course}>

        <div class={styles.card}>
        <img className={styles.myImg} src="/homeimg.jpg" width="345px" height="200px"/>
        <div class={styles.container}>
          <h4><b>How to learn javascript in 2022</b></h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sequi illo sed qui provident perferendis ab consequatur incidunt repellat mollitia nulla, magnam vero.</p>
          <a><button className={styles.button}>Read More</button></a>
        </div>
        </div>

        <div class={styles.card}>
        <img className={styles.myImg} src="/homeimg1.jpg" width={345} height={200} />
        <div class={styles.container}>
          <h4><b>John Doe</b></h4>
          <p>Architect & Engineer</p>
          <a><button className={styles.button}>Login</button></a>
        </div>
        </div>

        <div class={styles.card}>
        <img className={styles.myImg} src="/homeimg2.jpg" width={345} height={200} />
        <div class={styles.container}>
          <h4><b>John Doe</b></h4>
          <p>Architect & Engineer</p>
          <a><button className={styles.button}>Login</button></a>
        </div>
        </div>

        <div class={styles.card}>
        <img className={styles.myImg} src="/homeimg1.jpg" width={345} height={200} />
        <div class={styles.container}>
          <h4><b>John Doe</b></h4>
          <p>Architect & Engineer</p>
          <a><button className={styles.button}>Login</button></a>
        </div>
        </div>

        <div class={styles.card}>
        <img className={styles.myImg} src="/homeimg1.jpg" width={345} height={200} />
        <div class={styles.container}>
          <h4><b>John Doe</b></h4>
          <p>Architect & Engineer</p>
          <a><button className={styles.button}>Login</button></a>
        </div>
        </div>

        </div>
    </div>
  )
}

export default about