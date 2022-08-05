import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  const host= "http://localhost:5001"
  const [credentials, setcredentials] = useState({name: "" , email: "", phone:"", message:""})
  const router = useRouter()

  const handleSubmit= async(e)=>{
      const {name , email , phone,message}=credentials;
      e.preventDefault();
      const response = await fetch(`${host}/api/contact/contactdetails`, {
          method: 'POST', 
         
          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({name, email , phone , message})
        });
        
        const json= await response.json();
        console.log(json);
        if(json.success){
          router.push("/");
          // save the auth token and redirect
          // localStorage.setItem('token', json.authToken);
          // router.push("/");
          // props.showAlert("Account created successfully", "success")
        } else{
          //  props.showAlert("Invalid Credentials", "danger")
        }
        
      }

      const onChange=(e)=>{
        setcredentials({...credentials,[e.target.name]: e.target.value})
      }
  return (
    <>

      <h1 className={styles.h1}>Contact Us</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
         <div className={styles.container}>

          <div className={styles.box}>
          <label htmlFor="exampleInputEmail1" className={styles.name}>Name   </label>
          <input type="text" className={styles.fill} id="exampleInputEmail1"  name='name'   onChange={onChange}   aria-describedby="emailHelp"/>
          </div>
         
          <div className={styles.box}>
          <label htmlFor="exampleInputEmail1" className={styles.email}>Email Address   </label>
          <input type="email" className={styles.fill} id="exampleInputEmail1"   name='email'   onChange={onChange}  aria-describedby="emailHelp"/>
          </div>
          
          <div className={styles.box}>
          <label htmlFor="exampleInputPassword1" className={styles.phone}>Phone Number  </label>
          <input type="number" className={styles.fill} name='phone' id="exampleInputPassword1" onChange={onChange}/>
          </div>

          {/* <div class="input-group"> */}
          <span className={styles.textarea}>Message  </span>
          <textarea className={styles.textarea1} name='message' onChange={onChange}></textarea>
          {/* </div> */}

       
        </div>

        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </>
  )
}

export default Contact