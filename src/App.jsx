import React from 'react'
import NavBar from "./Components/NavBar.jsx"
import Home from "./Pages/Home.jsx"
import Subjects from './Pages/Subjects/Subjects.jsx'
import Topics from './Pages/Subjects/Topics.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "Subjects" element = {<Subjects/>} />
        <Route path = "Subjects/Topics/:id" element = {<Topics/>} />
      </Routes>

      </BrowserRouter>



    </div>
  )
}
