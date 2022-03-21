import React, { useState, useEffect } from 'react';
import slopeImg from '../../assets/images/slope.svg';
import './DetailPage.css';
import MapPage from '../MapPage/MapPage';
import ReviewPage from './ReviewPage';
import ToggleView from './ToggleView';
import { getPlaceDetail } from '../../services/user.service';

function DetailPage() {

  const [place, setPlace] = useState("")

  useEffect(async () => {
    //  TODO: 디테일 바로밑에 저거 함수에 아이디값 받아와서 넣기
    const detail = await getPlaceDetail();
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
              <img src={slopeImg}></img>
              <div className="placeiconname">장애인 화장실</div>
            </div>
          )}
          {place.isChargerExists && (
            <div className="placeicon">
              <img src={slopeImg}></img>
              <div className="placeiconname">휠체어 충전기</div>
            </div>
          )}
          {place.isElevatorExists && (
            <div className="placeicon">
              <img src={slopeImg}></img>
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

    
    {/* <ReviewPage />  */}
    </div>
  )
}

export default DetailPage