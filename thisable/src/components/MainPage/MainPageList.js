import React from 'react'
import './MainPage.css'
import slopeImg from '../../assets/images/slope.svg'
import PlaceInfo from '../MapPage/PlaceInfo';

function MainPageList() {
  const places = [
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
      name: "육쌈냉면 숙대점",
      address: "서울특별시 용산구 청파동 청파로",
      latitude: 37.544127,
      longitude: 126.9667812,
      distance: "0.5km",
      icon1: true,
      icon2: true,
      icon3: false,
      icon4: false
    }
  ];
  const renderPlaces = places && places.map(place => {
    return (
      <div className='PlaceListContainer' key={place.location_code}>
        {PlaceInfo(place)}
      </div>
    )
  })
  return (
    <div>
      {renderPlaces}
    </div>
  )
}

export default MainPageList