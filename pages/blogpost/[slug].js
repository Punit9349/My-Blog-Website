import React, {useState} from 'react'
// import {useRouter} from 'next/router'
import styles from '../../styles/BlogPost.module.css'

// Step1:- Find the file corresponding to slug.
// Step2:- Populate them inside the page.

const slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  
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


export async function getServerSideProps(context){
  
    // const router = useRouter();
    // console.log(context.query);
    const {slug}= context.query;
    let data= await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    let myBlog= await data.json();
  
  
  return {
    props: {myBlog},
  }
}

export default slug