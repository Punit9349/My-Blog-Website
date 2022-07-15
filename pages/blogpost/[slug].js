import React, {useState} from 'react'
// import {useRouter} from 'next/router'
import styles from '../../styles/BlogPost.module.css'

// Step1:- Find the file corresponding to slug.
// Step2:- Populate them inside the page.


const Slug = (props) => {
  const [Blog, setBlog] = useState(props.myBlog);
  function createMarkup(c){
    return {__html: c};
  }
  
  return (
    <>
    <div className={styles.con}>
      <main className={styles.main}>
            <h1>{Blog && Blog.title}</h1>
            <hr />
            {Blog && <div dangerouslySetInnerHTML={createMarkup(Blog.content)}></div> }
        </main>
    </div>
    </>
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

export default Slug