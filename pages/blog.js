import React, {useState, useEffect} from "react";
import styles from '../styles/Blog.module.css'
import Link from "next/link";

// step1:- collect all the files from blog directory.
// step2:- Iterate through them and display them.

const Blog = (props) => {
  console.log(props);
  const [blogs, setblogs] = useState(props.allBlogs);
  
  return (
    <>
      <div className={styles.con}>
          <h2 className="blogg">Popular Blogs</h2>

          {blogs.map((blogitem)=>{
            return  <div key={blogitem.slug} className={styles.blogItem}>
            <Link href={`/blogpost/${blogitem.slug}`}>
            <h3>{blogitem.title}</h3>
            </Link>
            <p>{blogitem.content.substr(0,140)}...</p>
         </div>
          })}


      </div>
    </>
  );
};

export async function getServerSideProps(context){

  let data = await fetch('http://localhost:3000/api/blogs')
  let allBlogs= await data.json();
  
  return {
    props: {allBlogs},
  }
}

export default Blog;
