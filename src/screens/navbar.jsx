import React from 'react'
import {Link} from "react-router-dom"
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <div className='nav'>
        <ul>
            <li>Home</li>
            <li>
                <Link> Education</Link>
               </li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar