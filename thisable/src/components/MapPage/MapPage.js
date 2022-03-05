import React, {useState} from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import CircularProgress from '@material-ui/core/CircularProgress';
import {geolocated} from "react-geolocated";


const mapKey = process.env.REACT_APP_GOOGLE_MAP_API;

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: 35.8348707,
    lng: 128.580119
  };

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
      latitude: 37.54442234376629,
      longitude: 126.96686963681883,
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

  const renderMap = () => {
    return <GoogleMap
      mapContainerStyle={mapStyle}
      zoom={18}
      center={{lat: +lat, lng: +lng}}>
        {renderMarker}
      </GoogleMap>
  }

  const renderMarker =
          places && places.map((place) => {
            var latitude = place.latitude
            var longitude = place.longitude
            return (
            <Marker
              position= {{lat: latitude, lng: longitude}}/>
          );
        });

  return (
    isLoaded ? renderMap() : <CircularProgress />
    
  )
}

export default MapPage