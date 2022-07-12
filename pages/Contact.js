import React from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  return (
    <>

      <h1 className={styles.h1}>Contact Us</h1>
      <form>
         <div className={styles.container}>

          <div className={styles.box}>
          <label htmlFor="exampleInputEmail1" className={styles.name}>Name   </label>
          <input type="text" className={styles.fill} id="exampleInputEmail1"       aria-describedby="emailHelp"/>
          </div>
         
          <div className={styles.box}>
          <label htmlFor="exampleInputEmail1" className={styles.email}>Email Address   </label>
          <input type="email" className={styles.fill} id="exampleInputEmail1"       aria-describedby="emailHelp"/>
          </div>
          
          <div className={styles.box}>
          <label htmlFor="exampleInputPassword1" className={styles.phone}>Phone Number  </label>
          <input type="number" className={styles.fill} id="exampleInputPassword1"/>
          </div>

          {/* <div class="input-group"> */}
          <span className={styles.textarea}>Message  </span>
          <textarea className={styles.textarea1}></textarea>
          {/* </div> */}

       
        </div>

        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </>
  )
}

export default Contact