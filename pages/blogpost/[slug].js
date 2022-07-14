import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/BlogPost.module.css'

// Step1:- Find the file corresponding to slug.
// Step2:- Populate them inside the page.

const slug = () => {
  const [blog, setblog] = useState();
  const router = useRouter();
  useEffect(() => {
    if(!router.isReady)  return;
    const {slug}= router.query;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
      return a.json();
    }).then((parsed)=>{
      console.log(parsed);
      setblog(parsed);
    })
    
  }, [router.isReady])
  
  return (
    <div className={styles.con}>
      <main className={styles.main}>
            <h1>{blog && blog.title}</h1>
            <hr />
            <div>
                {blog && blog.content}
            </div>
        </main>
    </div>
  )
}

export default slug