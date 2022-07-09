import React from 'react'
import Link from 'next/link'
import styles1 from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div>
         <nav className={styles1.mainnav}>
        <ul>
          <Link href='/' >
             <a><h3 className={styles1.logo} >Hunting Coder</h3></a>
           </Link>

          <Link href='/' >
             <a><li>Home</li></a>
           </Link>

          <Link href='/about' >
             <a><li>About</li></a>
           </Link>

          <Link href='/blog' > 
             <a><li>Blog</li> </a>
          </Link>

          <Link href='/Contact' >
            <a><li>Contact</li></a>
           </Link>

          <Link href='/contact' >
            <a><button className={styles1.button}>Login</button></a>
           </Link>

          <Link href='/contact' >
            <a><button className={styles1.button}>Signup</button></a>
           </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar