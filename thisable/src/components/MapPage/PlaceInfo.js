import React from 'react';
import { Link } from 'react-router-dom'
import slopeImg from '../../assets/images/slope.svg'
import './MapPage.css'

const PlaceInfo = (place) => {  
    return(
      <Link
        to={`detail/${place._id}`}
        style ={{ textDecoration: "none" }}>
      <div className='PlaceInfoCont' key={place._id}>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <h5 className='fw-bold text-dark'>{place.name}</h5>
            <div className='placeType'>{place.locationType}</div>
          </div>
          <div className='placeDist'>{place.distance}</div>
        </div>        
        <div className='placeAddr'>{place.address}</div>
        <div className='placeIcon'>
          {place.isToiletExists && (<img src={slopeImg}></img>)}
          {place.isChargerExists && (<img src={slopeImg}></img>)}
          {place.isElevatorExists && (<img src={slopeImg}></img>)}
          {place.isSlopeExists && (<img src={slopeImg}></img>)}
        </div>
      </div>
      </Link>
    )
  }

export default PlaceInfo;