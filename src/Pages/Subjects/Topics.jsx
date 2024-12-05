import React,{useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'


export default function Topics() {
    let {id} = useParams();
    let navigate = useNavigate()


    let [Topics,setTopics] = useState([

        {
            id: 1,
            name: "Algebra",
            subject_id: 1,
        },
        {
            id: 2,
            name: "Geometry",
            subject_id: 1,
        },
        {
            id: 3,
            name: "Calculus",
            subject_id: 1,
        },
        {
            id: 4,
            name: "Physics",
            subject_id: 2,
        },
        {
            id: 5,
            name: "Chemistry",
            subject_id: 2,
        },
        {
            id: 6,
            name: "Biology",
            subject_id: 2,
        },
    ]);

    console.log(id);
  return (
    <div>
        <h2>Topics for Subject ID: {id}</h2>
        {
            Topics.filter(topic => topic.subject_id === parseInt(id)).map(topic => (
                <div key={topic.id}>
                    <h3>{topic.name}</h3>
                    <button onClick={()=>{
                        navigate(`/Subjects/Topics/${id}/Chapters/${topic.id}`)
                    }} >See Chapters</button>
                </div>
            ))
        }
    </div>
  )
}
