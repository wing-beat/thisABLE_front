import React from 'react';
import slopeImg from '../../assets/images/slope.svg';
import './DetailPage.css';
import MapPage from '../MapPage/MapPage';
import ReviewPage from './ReviewPage';
import ToggleView from './ToggleView';

function DetailPage() {
  const place = 
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
      icon4: false,
      toilet_key: {
        key1: "설치장소설명",
        key2: "평일운영시간",
        key3: "토요일운영시간",
        key4: "공휴일운영시간",
      },
      toilet_value: {
        value1: "센터1층",
        value2: "09:00 ~ 18:00",
        value3: "09:00 ~ 18:00",
        value4: "09:00 ~ 18:00",
      },
      charger_key: {
        key1: "설치장소설명",
        key2: "평일운영시간",
        key3: "토요일운영시간",
        key4: "공휴일운영시간",
      },
      charger_value: {
        value1: "센터1층",
        value2: "09:00 ~ 18:00",
        value3: "09:00 ~ 18:00",
        value4: "09:00 ~ 18:00",
      },
    };


  return (
    <div className='maincontainer'>
    <div className='placedetail'>
      <div className="placenametype">
      <h5 className='placename'>{place.name}</h5>
      <div className='placetype'>{place.location_type}</div>
      </div>
      <div className='placeaddress'>{place.address}</div>
      <div className='placerate'>★★★☆☆ (1023)</div>
      <div className='placeiconlist'>
        <div className='placeicon'>
        <img src={slopeImg}></img>
        <div className='placeiconname'>아이콘 이름</div>
        </div>
        <div className='placeicon'>
        <img src={slopeImg}></img>
        <div className='placeiconname'>아이콘 이름</div>
        </div>
        <div className='placeicon'>
        <img src={slopeImg}></img>
        <div className='placeiconname'>아이콘 이름</div>
        </div>
        <div className='placeicon'>
        <img src={slopeImg}></img>
        <div className='placeiconname'>아이콘 이름</div>
        </div>
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