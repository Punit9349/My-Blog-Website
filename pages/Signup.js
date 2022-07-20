import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Signup.module.css'

const Signup = () => {
  const host= "http://localhost:5001"
  const [credentials, setcredentials] = useState({name: "" , email: "", password:"", cpassword:""})
  const router = useRouter()

  const handleSubmit= async(e)=>{
      const {name , email , password}=credentials;
      e.preventDefault();
      const response = await fetch(`${host}/api/auth/createnewuser`, {
          method: 'POST', 
         
          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({name, email , password})
        });
        
        const json= await response.json();
        console.log(json);
        if(json.success){
          // save the auth token and redirect
          localStorage.setItem('token', json.authToken);
          router.push("/Login");
          // props.showAlert("Account created successfully", "success")
        } else{
          //  props.showAlert("Invalid Credentials", "danger")
        }
        
      }

      const onChange=(e)=>{
        setcredentials({...credentials,[e.target.name]: e.target.value})
      }
  return (
    <div className={styles.con}>
    <div className={styles.signimg}>
        <picture><img src="/signimg1.jpg" alt="" className={styles.imgs} /></picture>
    </div>
    <div className={styles.signup}>
      <h1 className={styles.h1}>Create account</h1>
      <p className={styles.p}>Please fill in this form to create an account.</p>
      <form onSubmit={handleSubmit}>
         <div className={styles.container}>

          <div className={styles.box}>
          <label htmlFor="exampleInputEmail1" className={styles.name}>Name   </label>
          <input type="text" className={styles.fill} id="name" name='name' aria-describedby="emailHelp" onChange={onChange}/>
          </div>
         
          <div className={styles.box}>
          <label htmlFor="exampleInputEmail1" className={styles.email}>Email Address   </label>
          <input type="email" className={styles.fill} id="email"   name='email'    aria-describedby="emailHelp" onChange={onChange}/>
          </div>
          
          <div className={styles.box}>
          <label htmlFor="password" className={styles.phone}>Password</label>
          <input type="password" className={styles.fill} id="password" name='password' onChange={onChange}/>
          </div>

          <div className={styles.box}>
          <label htmlFor="password" className={styles.phone}>Confirm password</label>
          <input type="password" className={styles.fill} id="cpassword"name='cpassword' onChange={onChange}/>
          </div>

          {/* <p>Already have an account?</p> */}
       
        <button type="submit" className={styles.button}>Submit</button>
        </div>

      </form>
    </div>
    </div>
  )
}

export default Signup