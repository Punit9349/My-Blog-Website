import React from 'react'
import Link from 'next/link'
// import { useState } from 'react'
import styles1 from '../styles/Navbar.module.css'

const Navbar = () => {
  var navv=true;
  const onChange=(e)=>{
    navv=true;
    console.log(navv);
  }
  return (
    <div>
          <nav className={styles1.mainnav}  >
          <Link href='/' >
             <a><h3 className={styles1.logo} >TechnoBlogs</h3></a>
           </Link>
        <ul className={styles1.menu} style={{display: navv?'flex':'none'}}>

         
          <Link href='/' >
             <a><li>Home</li></a>
           </Link>

          <Link href='/Courses' >
             <a><li>Courses</li></a>
           </Link>

          <Link href='/blog' > 
             <a><li>Blog</li> </a>
          </Link>

          <Link href='/Contact' >
            <a><li>Contact</li></a>
           </Link>


          <Link href='/Login' >
            <a><button className={styles1.button}>Login</button></a>
           </Link>

          <Link href='/Signup' >
            <a><button className={styles1.button}>Signup</button></a>
           </Link>
        </ul>
           <i className="fa-solid fa-bars fa-xl" id={styles1.icon} onClick={onChange}></i>
      </nav>
    </div>
  )
}

export default Navbar