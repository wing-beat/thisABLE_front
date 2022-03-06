import React, {useState} from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow, useJsApiLoader, addListener } from '@react-google-maps/api';
import CircularProgress from '@material-ui/core/CircularProgress';
import {geolocated} from "react-geolocated";
import slopeImg from '../../assets/images/slope.svg'

const mapKey = process.env.REACT_APP_GOOGLE_MAP_API;

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: 35.8348707,
    lng: 128.580119
  };

  const lat = 37.544127
  const lng = 126.9667812

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
      location_code: "124",
      location_type: "음식점",
      name: "몬스터플레이스 숙대점",
      address: "서울특별시 용산구 청파동 청파로",
      latitude: 37.54442234376629,
      longitude: 126.96686963681883,
      distance: "0.5km",
      icon1: true,
      icon2: true,
      icon3: false,
      icon4: false
    },
    {
      location_code: "125",
      location_type: "음식점",
      name: "에이그레이트 숙대점",
      address: "서울특별시 용산구 청파동 청파로",
      latitude: 37.544655335413886,
      longitude: 126.9669056190536,
      distance: "0.5km",
      icon1: true,
      icon2: true,
      icon3: false,
      icon4: false
    }
  ];

function MapPage() {
  
  const mapStyle = {
    height: "22.4rem",
    width: "100%"
  }

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API
  })

  const [activeMarker, setActiveMarker] = useState(null);

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
        {places.map(({location_code, location_type, name, address, latitude, longitude, distance}) => (
          <Marker
          position= {{lat: latitude, lng: longitude}}
          onClick={() => handleActiveMarker(location_code)}
          >
            {activeMarker === location_code ? (
            <InfoWindow
              onCloseClick={() => setActiveMarker(null)}>
                <div className='infosindow_wrap' key={location_code}>
              <div className='infodindow'>
                <div className='info_title'>
                <div className='d-flex align-items-center'>
                  <h5 className='fw-bold'>{name}</h5>
                  <div className='placeType'>{location_type}</div>
                </div>
                  <div className='placeDist'>{distance}</div>
                </div>
                <div className='info_etc'>
                <div className='placeAddr'>{address}</div>
                  <div className='placeIcon'>
                    <img src={slopeImg}></img>
                    <img src={slopeImg}></img>
                    <img src={slopeImg}></img>
                    <img src={slopeImg}></img>
                  </div>
                </div>
              </div>
              <div className='infowindow_anchor'></div>
            </div>
            </InfoWindow>
            ) : null}
          </Marker>
        ))}
      </GoogleMap>
  }

  return (
    isLoaded ? renderMap() : <CircularProgress />
    
  )
}

export default MapPage;