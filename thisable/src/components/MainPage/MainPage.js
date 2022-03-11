import React from 'react'
import MapPage from '../MapPage/MapPage'
import MainPageList from './MainPageList'
import "./MainPage.css"

function MainPage() {
  return (
    <div className='MainPage'>
      <MapPage />
      <div className="MainPageList" >
        <MainPageList/>
      </div>
    </div>
  )
}

export default MainPage