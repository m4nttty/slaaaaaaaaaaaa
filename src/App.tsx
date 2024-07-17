import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Content } from './components/Dashboard/Content'

const Logos = () => {
  return( 
    <div><h1></h1>
    <a href="https://vitejs.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  </div>
  )
} 




function App() {
  

  return (
    <>
     <Logos/>
     <Content/> 
    </>
  )
}

export default App
