import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
import IdCard from './components/IdCard'
import image from './assets/esther.png'
import image1 from './assets/neza.jpg'
import image2 from './assets/tito.jpeg'
function CardList() {
  const [count, setCount] = useState(0)

  const people = [
    {
      id: 1,
      name:"Umucyo Esther",
      role:"Software Engineer",
      department:"Engineering",
      imageUrl: image
    },

    {
      id: 2,
      name:"Neza Emmanuel",
      role:"Frontend Developer",
      department:"Engineering",
      imageUrl:image1

    },

    {
      id: 3,
      name:"Igiraneza Tito",
      role:"Full Stack Developer",
      department:"Engineering",
      imageUrl:image2
      
    }


  ]

  return (
    
    
   <>
     
<div className="min-h-screen bg-sky-900 w-full flex items-center justify-between p-20"> 
 
 
  {people.map((person) => (
    
    <IdCard key={person.id}
    
    name={person.name}
    role={person.role}
    image={person.imageUrl}
    department={person.department}
    
    />
    
   
    
  ))}
      

    </div>
       

     


    </>

     
   
  )
}

export default CardList;
