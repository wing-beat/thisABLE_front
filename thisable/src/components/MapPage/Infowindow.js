import { InfoWindow } from '@react-google-maps/api';
import React from 'react';
import slopeImg from '../../assets/images/slope.svg'

const Infowindow = ({place}) => {
    return(
      <div className='infosindow_wrap' key={place.location_code}>
        <div className='infodindow'>
          <div className='info_title'>
          <div className='d-flex align-items-center'>
            <h5 className='fw-bold'>{place.name}</h5>
            <div className='placeType'>{place.location_type}</div>
          </div>
            <div className='placeDist'>{place.distance}</div>
          </div>
          <div className='info_etc'>
          <div className='placeAddr'>{place.address}</div>
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
    )
  }

export default Infowindow;