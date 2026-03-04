import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import React from 'react'
import IdCard from './components/IdCard'

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
    <>
    <IdCard />

     
    </>
  )
}

export default CardList;
