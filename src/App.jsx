import React from 'react'
import NavBar from './components/NavBar'
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="">
      <NavBar />
      <Outlet/>
    </div>
  )
}

export default App