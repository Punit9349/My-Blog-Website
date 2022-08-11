import React from 'react'
import styles from '../styles/notes.module.css'
import { useState} from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Notes = () => {
  const router = useRouter()
  const [func, setfunc] = useState();

  useEffect(() => {
    if(localStorage.getItem('token')){
      setfunc('flex');
    }else{
      alert('you should first login');
      router.push('/Login');
    }

    },[] )
  return (
    <div className={styles.pop} style={{display:func}}>

      <h2>heelo this is dummy</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, suscipit ut! Illo, repudiandae aliquid. Aspernatur facilis, temporibus, quaerat qui in beatae unde dolor quasi, dolorum nulla adipisci voluptatum aliquam! Consectetur ducimus accusamus recusandae dolorem.</p>


      {/* <div className={styles.pop}></div>
      <iframe className={styles.pdf}  sandbox="allow-scripts allow-same-origin" src="https://drive.google.com/file/d/1SPMmLzfcZfhbW3B9EdvZoxRe_qAkadML/preview"></iframe> */}

    </div>
  )
}

export default Notes