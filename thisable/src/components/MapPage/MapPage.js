import React, {useEffect, useState} from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import CircularProgress from '@material-ui/core/CircularProgress';
import {geolocated} from "react-geolocated";
import slopeImg from '../../assets/images/slope.svg'
import './MapPage.css'
import PlaceInfo from './PlaceInfo';
import { Link } from 'react-router-dom';

  const lat = 37.544127
  const lng = 126.9667812

  const places = [
    {      
      location_code: "123",
      location_type: "음식점",
      name: "맛있는 거 먹고 싶다 숙대점",
      address: "서울특별시 용산구 청파동 청파로",
      latitude: 37.544127,
      longitude: 126.9667812,
      distance: "0.5km",
      icon1: true,
      icon2: false,
      icon3: true,
      icon4: false
    },
    {
      location_code: "124",
      location_type: "음식점",
      name: "몬스터플레이스 숙대점",
      address: "서울특별시 용산구 청파동 청파로",
      latitude: 37.54442234376629,
      longitude: 126.96686963681883,
      distance: "0.5km",
      icon1: true,
      icon2: false,
      icon3: false,
      icon4: true
    },
    {
      location_code: "125",
      location_type: "음식점",
      name: "육쌈냉면 숙대점",
      address: "서울특별시 용산구 청파동 청파로",
      latitude: 37.544928,
      longitude: 126.967381,
      distance: "0.5km",
      icon1: false,
      icon2: true,
      icon3: false,
      icon4: true
    },
    {
      location_code: "126",
      location_type: "음식점",
      name: "에이그레이트 숙대점",
      address: "서울특별시 용산구 청파동 청파로",
      latitude: 37.544655335413886,
      longitude: 126.9669056190536,
      distance: "0.5km",
      icon1: false,
      icon2: true,
      icon3: true,
      icon4: true
    }
  ];

function MapPage() {
  
  const mapStyle = {
    height: "100vh",
    width: "100%"
  }

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API
  })

  const [activeMarker, setActiveMarker] = useState(null);
  const [category, setCategory] = useState("");

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };  

  const renderMap = () => {
    return <GoogleMap
      mapContainerStyle={mapStyle}
      zoom={18}      
      center={{lat: +lat, lng: +lng}}
      onClick={() => setActiveMarker(null)}>   
      <div className='btnCont'>
        <div className='filterBtnCont'>      
          <div onClick={() => setCategory("icon1")}>장애인 화장실</div>
          <div onClick={() => setCategory("icon2")}>휠체어 충전기</div>        
          <div onClick={() => setCategory("icon3")}>엘리베이터</div>        
          <div onClick={() => setCategory("icon4")}>슬로프</div>        
          <div onClick={() => setCategory("")}>모두 보기</div>        
        </div>
        <Link to="/" style ={{ textDecoration: "none", color: "black" }}>
          <div className='listViewBtn'>리스트 보기</div>
        </Link>
      </div>
      {renderMarker}
    </GoogleMap>
  }

  const renderMarker =
    places && places
      .filter((info) => {
        if (category == "icon1") { return info.icon1 } 
        else if (category == "icon2") { return info.icon2 }         
        else if (category == "icon3") { return info.icon3 }         
        else if (category == "icon4") { return info.icon4 }         
        else { return true }
      })  
      .map((place) => (
          <Marker
          position= {{lat: place.latitude, lng: place.longitude}}
          onClick={() => handleActiveMarker(place.location_code)}
          >
          {activeMarker === place.location_code ? (
            
            <InfoWindow
              onCloseClick={() => setActiveMarker(null)}>
                {PlaceInfo(place)}
            </InfoWindow>
            
          ) : null}
        </Marker>
      ))

  return (
    isLoaded ? renderMap() : <CircularProgress />    
  )
}

export default MapPage;