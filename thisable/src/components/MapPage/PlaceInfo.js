import React from 'react';
import { Link } from 'react-router-dom'
import slopeImg from '../../assets/images/slope.svg';
import chargerImg from '../../assets/images/charger.svg';
import toiletImg from '../../assets/images/toilet.svg';
import elevatorImg from '../../assets/images/elevator.svg';
import './MapPage.css'

const PlaceInfo = (place) => {
    return(
      <Link
        to={`detail/${place.location_code}`}
        style ={{ textDecoration: "none" }}>
      <div className='PlaceInfoCont' key={place.location_code}>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <h5 className='fw-bold text-dark'>{place.name}</h5>
            <div className='placeType'>{place.location_type}</div>
          </div>
          <div className='placeDist'>{place.distance}</div>
        </div>        
        <div className='placeAddr'>{place.address}</div>
        <div className='placeIcon'>
          <img src={toiletImg}></img>
          <img src={chargerImg}></img>
          <img src={slopeImg}></img>
          <img src={elevatorImg}></img>
        </div>
      </div>
      </Link>
    )
  }

export default PlaceInfo;