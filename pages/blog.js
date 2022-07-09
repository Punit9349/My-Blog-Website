import React from "react";
import styles from '../styles/Blog.module.css'
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <div className={styles.con}>
          <h2 className="blogg">Popular Blogs</h2>

          <div className={styles.blogItem}>
            <Link href={'/blogpost/blog1'}>
            <h3>How to learn javascript in 2022?</h3>
            </Link>
            <p>Javascript is language used to design logic for the web.</p>
         </div>

          <div className={styles.blogItem}>
            <Link href={'/blogpost/blog2'}>
            <h3>How to learn javascript in 2022?</h3>
            </Link>
            <p>Javascript is language used to design logic for the web.</p>
         </div>

          <div className={styles.blogItem}>
            <Link href={'/blogpost/blog3'}>
            <h3>How to learn javascript in 2022?</h3>
            </Link>
            <p>Javascript is language used to design logic for the web.</p>
         </div>

          <div className={styles.blogItem}>
            <Link href={'/blogpost/blog4'}>
            <h3>How to learn javascript in 2022?</h3>
            </Link>
            <p>Javascript is language used to design logic for the web.</p>
         </div>


         
      </div>
    </>
  );
};

export default Blog;
