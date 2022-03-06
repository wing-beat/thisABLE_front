import React, {useState} from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import CircularProgress from '@material-ui/core/CircularProgress';
import {geolocated} from "react-geolocated";

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
      latitude: 37.544928,
      longitude: 126.967381,
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

  const btnStyle = {             
    backgroundColor: `white`,
    padding: `6px 10px`,
    borderRadius: `20px`,
    boxShadow: `0 4px 4px rgba(0, 0, 0, 0.3)`,
    fontSize: `14px`,
    position: "absolute",
    top: "10px",
    left: "50%",
    marginLeft: "-120px"    
  }

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API
  })

  const renderMap = () => {
    return <GoogleMap
      mapContainerStyle={mapStyle}
      zoom={18}
      center={{lat: +lat, lng: +lng}}>       
        <div style={btnStyle} onClick={onClickToilet}>장애인 화장실</div>
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