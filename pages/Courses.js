import React from 'react'
import styles from '../styles/Courses.module.css'

const Courses = () => {
  return (
    <div className={styles.body}>
    <h2 className={styles.h2}>Courses</h2>
      <div className={styles.course}>

      <div className={styles.card}>
      <picture><img className={styles.myImg} src="/homeimg.jpg" alt="" width="345px" height="213px"/></picture>
      <div className={styles.container}>
        <h4><b>How to learn javascript in 2022</b></h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sequi illo sed qui provident perferendis ab consequatur incidunt repellat.</p>
        <a><button className={styles.button}>Read More</button></a>
      </div>
      </div>

      <div className={styles.card}>
      <picture><img className={styles.myImg} src="/homeimg1.jpg" alt="" width={345} height={213} /></picture>
      <div className={styles.container}>
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
        <a><button className={styles.button}>Read More</button></a>
      </div>
      </div>

      <div className={styles.card}>
      <picture><img className={styles.myImg} src="/homeimg2.jpg" alt="" width={345} height={213} /></picture>
      <div className={styles.container}>
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
        <a><button className={styles.button}>Read More</button></a>
      </div>
      </div>

      <div className={styles.card}>
      <picture><img className={styles.myImg} src="/homeimg1.jpg" alt="" width={345} height={213} /></picture>
      <div className={styles.container}>
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
        <a><button className={styles.button}>Read More</button></a>
      </div>
      </div>

      <div className={styles.card}>
      <picture><img className={styles.myImg} src="/homeimg1.jpg" alt="" width={345} height={213} /></picture>
      <div className={styles.container}>
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
        <a><button className={styles.button}>Read More</button></a>
      </div>
      </div>

      </div>
    </div>
  )
}

export default Courses