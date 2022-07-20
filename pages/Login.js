import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Signup.module.css'

const Login = () => {
  const host= "http://localhost:5001"

  const [credentials, setcredentials] = useState({email: "", password:""})
  const router = useRouter()

  const handleSubmit= async(e)=>{
      e.preventDefault();
      const response = await fetch(`${host}/api/auth/login`, {
          method: 'POST', 
         
          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({email: credentials.email ,password:credentials.password})
        });
        
        const json= await response.json();
        console.log(json);
        if(json.success){
          // save the auth token and redirect
          localStorage.setItem('token', json.authToken);
          // props.showAlert("Logged in successfully", "success")
          router.push("/");
        }else{
          // props.showAlert("Invalid Details", "danger")
        }
      }

      const onChange=(e)=>{
          setcredentials({...credentials,[e.target.name]: e.target.value})
      }
  return (
    <div>
    <div className={styles.conn}>
    <div className={styles.login}>
      <h1 className={styles.h1}>Login to your account</h1>
      {/* <p className={styles.p}>Please fill in this form to create an account.</p> */}
      <form onSubmit={handleSubmit}>
         <div className={styles.container}>
         
          <div className={styles.box1}>
          <label htmlFor="exampleInputEmail1" className={styles.email}>Email Address   </label>
          <input type="email" className={styles.fill} id="email"   name='email'    aria-describedby="emailHelp" onChange={onChange}/>
          </div>
          
          <div className={styles.box1}>
          <label htmlFor="password" className={styles.phone}>Password</label>
          <input type="password" className={styles.fill} id="password" name='password' onChange={onChange}/>
          </div>
       
        </div>

        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
    </div>
    </div>
  )
}

export default Login