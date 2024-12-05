import React,{useState} from 'react'

export default function Chapters() {
    let [Chapters,setChapters] = useState([

        {
            id: 1,
            name: "Chapter 1",
            topic_id: 1,
            subject_id: 1,
        },
        {

                id: 1,
                name: "Chapter 2",
                topic_id: 1 ,
                subject_id: 1,
        },
        {
            id: 3,
            name: "Chapter 3",
            topic_id: 1,
        },
        {
            id: 4,
            name: "Chapter 4",
            topic_id: 2,
        },
        {
            id: 5,
            name: "Chapter 5",
            topic_id: 2,
        },
        {
            id: 6,
            name: "Chapter 6",
            topic_id: 2,
        },
    ]);
  return (
    <div>
        {}
    </div>
  )
}
