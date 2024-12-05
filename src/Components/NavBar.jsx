import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
        <h1>My React App</h1>
        <ul>
          <li><Link to = "/" >Home</Link></li>
          <li><Link to = "/Subjects" >Subjects</Link></li>
          <li><Link to = "/About" >About</Link></li>
        </ul>
  
    </nav>
  )
}
