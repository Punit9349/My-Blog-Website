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
        <h4><b>Dynamic Programming</b></h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sequi illo sed qui provident perferendis ab consequatur incidunt repellat.</p>
        <a><button className={styles.button}>Read More</button></a>
      </div>
      </div>

      <div className={styles.card}>
      <picture><img className={styles.myImg} src="/homeimg1.jpg" alt="" width={345} height={213} /></picture>
      <div className={styles.container}>
        <h4><b>Recursion</b></h4>
        <p>We will cover all important patterns and questions of recursion in this course with proper codes of all problems.</p>
        <a><button className={styles.button}>Read More</button></a>
      </div>
      </div>

      <div className={styles.card}>
      <picture><img className={styles.myImg} src="/homeimg2.jpg" alt="" width={345} height={213} /></picture>
      <div className={styles.container}>
        <h4><b>Binary Tree</b></h4>
        <p>All major binary tree topics covered with proper explanation.</p>
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