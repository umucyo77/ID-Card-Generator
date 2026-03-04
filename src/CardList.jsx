import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import React from 'react'
import IdCard from './components/IdCard'

function CardList() {
  const [count, setCount] = useState(0)

  return (
    <>
    <IdCard />

     
    </>
  )
}

export default CardList;
