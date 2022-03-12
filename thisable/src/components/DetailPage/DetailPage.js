import React, {useContext, useState} from 'react';
import slopeImg from '../../assets/images/slope.svg';
import './DetailPage.css';
import { Accordion, AccordionContext, Card, useAccordionButton } from 'react-bootstrap';
import MapPage from '../MapPage/MapPage';
import ReviewPage from './ReviewPage';

function CustomToggle({ children, eventKey, callback }) {
  const [message, setMessage] = useState('▶')
  const {activeEventKey} = useContext(AccordionContext);
  const isCurrentEventKey = activeEventKey === eventKey;

  const decoratedOnClick = useAccordionButton(eventKey, () =>
    setMessage(prev => prev === "▶" ? "▼" : "▶"));
  return (
    <button
      type='button'
      onClick={decoratedOnClick}
      className="customtoggle">
      {message}{children}
    </button>
  );
}


function DetailPage() {
  const place = [
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
    }
  ];


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
      <Accordion defaultActiveKey={['0']}>
      <Card>
          <CustomToggle eventKey="1"> 장애인 화장실 상세정보 보기</CustomToggle>
        <Accordion.Collapse eventKey="1">
        <div className='toggle'>
            <div className='togglekey'>
              설치장소설명<br/>
              평일운영시간<br/>
              토요일운영시간<br/>
              공휴일운영시간
            </div>
            <div className='togglevalue'>
              센터1층<br/>
              09:00 ~ 18:00<br/>
              09:00 ~ 18:00<br/>
              09:00 ~ 18:00
            </div>
            </div>
        </Accordion.Collapse>
      </Card>
      </Accordion>
      <Accordion defaultActiveKey={['0']}>
      <Card>
          <CustomToggle eventKey="1"> 휠체어 충전기 상세정보 보기</CustomToggle>
        <Accordion.Collapse eventKey="1">
        <div className='toggle'>
            <div className='togglekey'>
              설치장소설명<br/>
              평일운영시간<br/>
              토요일운영시간<br/>
              공휴일운영시간
            </div>
            <div className='togglevalue'>
              센터1층<br/>
              09:00 ~ 18:00<br/>
              09:00 ~ 18:00<br/>
              09:00 ~ 18:00
            </div>
            </div>
        </Accordion.Collapse>
      </Card>
      </Accordion>
      </div>

    
    <ReviewPage /> 
    </div>
  )
}

export default DetailPage