import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './CardList.jsx'
import React from 'react'
import CardList from './CardList.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardList />
  </StrictMode>,
)
