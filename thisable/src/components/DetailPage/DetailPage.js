import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import slopeImg from '../../assets/images/slope.svg';
import chargerImg from '../../assets/images/charger.svg';
import toiletImg from '../../assets/images/toilet.svg';
import elevatorImg from '../../assets/images/elevator.svg';
import './DetailPage.css';
import MapPage from '../MapPage/MapPage';
import ReviewPage from './ReviewPage';
import ToggleView from './ToggleView';
import { getPlaceDetail } from '../../services/user.service';

function DetailPage() {

  const [place, setPlace] = useState("")

  let { id } = useParams();

  useEffect(async () => {
    const detail = await getPlaceDetail(id);
    setPlace(detail.response)
  }, []);  

  return (
    <div className='maincontainer'>
    <div className='placedetail'>
      <div className="placenametype">
      <h5 className='placename'>{place.name}</h5>
      <div className='placetype'>{place.locationType}</div>
      </div>
      <div className='placeaddress'>{place.address}</div>
      <div className='placerate'>★★★☆☆ (1023)</div>
      <div className='placeiconlist'>
        {place.isToiletExists && (
            <div className="placeicon">
              <img src={toiletImg}></img>
              <div className="placeiconname">장애인 화장실</div>
            </div>
          )}
          {place.isChargerExists && (
            <div className="placeicon">
              <img src={chargerImg}></img>
              <div className="placeiconname">휠체어 충전기</div>
            </div>
          )}
          {place.isElevatorExists && (
            <div className="placeicon">
              <img src={elevatorImg}></img>
              <div className="placeiconname">엘리베이터</div>
            </div>
          )}
          {place.isSlopeExists && (
            <div className="placeicon">
              <img src={slopeImg}></img>
              <div className="placeiconname">슬로프</div>
            </div>
          )}
      </div>
      </div>
      
      <div className='togglelist'>
        <ToggleView />
      </div>

    
    <ReviewPage locationId={place.location_code}/>
    </div>
  )
}

export default DetailPage