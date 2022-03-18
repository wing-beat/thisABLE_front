import React from 'react'
import './MainPage.css'
import slopeImg from '../../assets/images/slope.svg'
import PlaceInfo from '../MapPage/PlaceInfo';
import PaginationView from './PaginationView';
import { Outlet } from 'react-router-dom';

function MainPageList() {
  const places = {
    totalPage: 4,
    currentPage: 1,
    nextUrl: "?page=2",
    results:[
    {      
      location_code: "123",
      location_type: "음식점",
      name: "몬플몬플 숙대점",
      address: "서울특별시 용산구 청파동 청파로",
      latitude: 37.544127,
      longitude: 126.9667812,
      distance: "0.5km",
      icon1: true,
      icon2: true,
      icon3: false,
      icon4: false
    },
    {
      location_code: "123",
      location_type: "음식점",
      name: "육쌈냉면 숙대점",
      address: "서울특별시 용산구 청파동 청파로",
      latitude: 37.544127,
      longitude: 126.9667812,
      distance: "0.5km",
      icon1: true,
      icon2: true,
      icon3: false,
      icon4: false
    },
    {
      location_code: "123",
      location_type: "음식점",
      name: "코피티암 숙대점",
      address: "서울특별시 용산구 청파동 청파로",
      latitude: 37.544127,
      longitude: 126.9667812,
      distance: "0.5km",
      icon1: true,
      icon2: true,
      icon3: false,
      icon4: false
    }
  ]};

  const renderPlaces = places && places.results.map(place => {
    return (
      <div className='PlaceListContainer' key={place.location_code}>
        {PlaceInfo(place)}
      </div>      
    )
  })

  const handleCallback = (changedPage) => {
    console.log("넘어온 페이지네이션 페이지", changedPage)
  }

  return (
    <div>      
      {renderPlaces}
      <PaginationView page={places} handleCallback={handleCallback} />
      <Outlet />
    </div>
  )
}

export default MainPageList