import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapKey = process.env.REACT_APP_GOOGLE_MAP_API;

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: 35.8348707,
    lng: 128.580119
  };

function MapPage() {
  return (
    <LoadScript
      googleMapsApiKey={mapKey}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
    
  )
}

export default MapPage