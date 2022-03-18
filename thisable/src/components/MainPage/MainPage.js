import React from 'react'
import MapPage from '../MapPage/MapPage'
import "./MainPage.css"
import { Outlet } from 'react-router-dom'

function MainPage() {
  return (
    <div className='MainPage'>
      <MapPage />
      <div className="MainPageList" >
        <Outlet />
      </div>
    </div>
  )
}

export default MainPage