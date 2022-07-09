import React from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const slug = () => {
    const router=useRouter();
    const {slug}= router.query;
  return (
    <div className={styles.con}>
      {slug}
    </div>
  )
}

export default slug