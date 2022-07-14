import React from 'react'
import styles from '../styles/Signup.module.css'

const Signup = () => {
  return (
    <div className={styles.con}>
    <div className={styles.signup}>
      <h1 className={styles.h1}>Create account</h1>
      <p className={styles.p}>Please fill in this form to create an account.</p>
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
          <label htmlFor="password" className={styles.phone}>Password</label>
          <input type="password" className={styles.fill} id="password"/>
          </div>

          <div className={styles.box}>
          <label htmlFor="password" className={styles.phone}>Confirm password</label>
          <input type="password" className={styles.fill} id="password"/>
          </div>

          {/* <p>Already have an account?</p> */}

       
          {/* <span className={styles.textarea}>Message  </span>
          <textarea className={styles.textarea1}></textarea> */}
         

       
        </div>

        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Signup