import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Subjects() {
    let navigate = useNavigate()

    let [Subjects,setSubjects] = useState([
        {id: 1, name: "Math"},
        {id: 2, name: "Science"},
        {id: 3, name: "History"},
        {id: 4, name: "Geo"},,
  
    ])

  return (
    <div>
        <section>
            <h2>All Subjects</h2>
        </section>

        <section>
            {
            Subjects.map(subject => (
                <div key={subject.id}>
                    <h3>{subject.name}</h3>
                    <button onClick={()=>{
                        navigate(`/Subjects/Topics/${subject.id}`)
                    }} >See Topics</button>
                </div>
            ))
            }
        </section>

    </div>
  )
}
