import React, {useState, useEffect} from "react";
import styles from '../styles/Blog.module.css'
import Link from "next/link";

// step1:- collect all the files from blog directory.
// step2:- Iterate through them and display them.

const Blog = () => {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    console.log("use effect is running");
    fetch('http://localhost:3000/api/blogs').then((a)=>{
      return a.json();
    }).then((parsed)=>{
      console.log(parsed);
      setblogs(parsed);
    })
    
  }, [])
  
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

export default Blog;
