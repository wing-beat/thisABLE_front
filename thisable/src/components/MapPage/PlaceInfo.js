import React from 'react';
import slopeImg from '../../assets/images/slope.svg'
import './MapPage.css'

const PlaceInfo = (place) => {
    return(
      <a
        href={`detail/${place.location_code}`}
        style ={{ textDecoration: "none" }}>
      <div className='PlaceInfoCont' key={place.location_code}>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <h5 className='fw-bold'>{place.name}</h5>
            <div className='placeType'>{place.location_type}</div>
          </div>
          <div className='placeDist'>{place.distance}</div>
        </div>        
        <div className='placeAddr'>{place.address}</div>
        <div className='placeIcon'>
          <img src={slopeImg}></img>
          <img src={slopeImg}></img>
          <img src={slopeImg}></img>
          <img src={slopeImg}></img>
        </div>
      </div>
      </a>
    )
  }

export default PlaceInfo;