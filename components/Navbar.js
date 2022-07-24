import React from 'react'
import Link from 'next/link'
import {useState} from 'react'
import styles1 from '../styles/Navbar.module.css'


const Navbar = () => { 
   
      const [boola, setboola] = useState(false);
      const [func, setfunc] = useState("flex");
      const [func1, setfunc1] = useState("none");
      console.log(func1);
      const onChange=()=>{
         setboola(true);
         setfunc('none');
         setfunc1('flex');
      }

      const onChange1=()=>{
        setboola(false);
        setfunc1('flex');
        setfunc('none');
      }
      return (
        <div>
          <nav className={styles1.mainnav}  >
          <Link href='/' >
             <a><h3 className={styles1.logo} >TechnoBlogs</h3></a>
          </Link>
        <ul data-visible={boola} className='menu' >

         
          <Link href='/' >
             <a><li>Home</li></a>
           </Link>

          <Link href='/Courses' >
             <a><li>Courses</li></a>
           </Link>

          <Link href='/latestblogs' > 
             <a><li>Blog</li> </a>
          </Link>

          <Link href='/Contact' >
            <a><li>Contact</li></a>
           </Link>

        </ul>
        <div className={styles1.bumton}> 
          <Link href='/Login' >
            <a><button className={styles1.button}>Login</button></a>
           </Link>

          <Link href='/Signup' >
            <a><button className={styles1.button} id={styles1.button2}>Signup</button></a>
           </Link>

         </div>  
           <i className="fa-solid fa-bars fa-xl" id={styles1.icon} onClick={onChange} style={{display:{func}}}></i>
           <i className="fa-solid fa-xmark fa-2xl" id={styles1.icon1} onClick={onChange1} style={{display :{func1}}}></i>
      </nav>
    </div>
  )
}

export default Navbar