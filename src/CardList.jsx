import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
import IdCard from './components/IdCard'
import image from './assets/esther.png'

function CardList() {
  const [count, setCount] = useState(0)

  const people = [
    {
      id: 1,
      name:"Umucyo Esther",
      role:"Software Engineer",
      department:"Engineering",
      image:"./assets/esther.png"
    },

    {
      id: 2,
      name:"Alice Johnson",
      role:"Frontend Developer",
      department:"Engineering",
      image:"./assets/alice.png"

    },

    {
      id: 3,
      name:"Igiraneza Tito",
      role:"Full Stack Developer",
      department:"Engineering",
      image:"./assets/tito.png"
    }


  ]

  return (
    
    
   
     
<div className="min-h-screen bg-sky-900 w-full flex items-center justify-between">
 <div className="text-5xl text-white">CARD LIST </div>
  {people.map((person) => (
    <IdCard key={person.id}
    name={person.name}
    role={person.role}
    department={person.department}
    image={person.image} />
  ))}
      

    </div>
       

     


    

     
   
  )
}

export default CardList;
