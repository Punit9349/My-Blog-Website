import React from 'react'
// import styles1 from '../styles/Home.modules1.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
         <nav className="mainnav">
        <ul>
          <Link href='/' >
             <a><h3 className="logo" >Hunting Coder</h3></a>
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

          <Link href='/contact' >
            <a><li>Contact</li></a>
           </Link>

          <Link href='/contact' >
            <a><button className="button">Login</button></a>
           </Link>

          <Link href='/contact' >
            <a><button className="button">Signup</button></a>
           </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar