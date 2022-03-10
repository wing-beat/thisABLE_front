import React, {useContext, useState} from 'react';
import slopeImg from '../../assets/images/slope.svg';
import './DetailPage.css';
import { Accordion, AccordionContext, Card, useAccordionButton } from 'react-bootstrap';
import MapPage from '../MapPage/MapPage';

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
  const review = [
    {
      star: "★★★☆☆",
      user: "장애인 이용자",
      date: "2020.10.23",
      content: "어쩌구저쩌구 웅앵웅 여기 좋아요 깨끗하고 좋고 최고예요 관리도 너무 잘되어 있고 운영시간도 길고 그냥 최고최고",
      goodhelp: "128",
      badhelp: "22",
    },
    {
      star: "★★★☆☆",
      user: "장애인 이용자",
      date: "2020.10.23",
      content: "어쩌구저쩌구 웅앵웅 여기 좋아요 깨끗하고 좋고 최고예요 관리도 너무 잘되어 있고 운영시간도 길고 그냥 최고최고",
      goodhelp: "128",
      badhelp: "22",
    },
  ]


  return (
    <div className='maincontainer'>
    <div className='placedetail'>
      <div className="placenametype">
      <h5 className='placename'>공룡도배부른안심탕수육 구의점</h5>
      <div className='placetype'>음식점</div>
      </div>
      <div className='placeaddress'>서울특별시 용산구 청파로 43길 70 지층 몬스터플레이스 서울특별시 용산구 청파로 43길 70 지층 몬스터플레이스</div>
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

    <div className='reviewcontainer'>
      <div className='reviewinputtop'>
      <div className='reviewtitle'>후기를 남겨주세요</div>
      <div className='reviewinputstar'>☆☆☆☆☆</div>
      </div>
      <div className='reviewinput'>작성한 후기는 익명으로 등록됩니다.</div>
      <button className='reviewinputbutton'>등록</button>
    </div>
    <div className='reviewlist'>
      <div className='reviewlisttitle'>
      <div className='reviewlistnum'>후기 435개</div>
      <div className='reviewlistsort'>사용자 추천순 | 최근 작성순</div>
      </div>
      <div className='review'>
        <div className='reviewtop'>
        <div className='reviewtopleft'>
        <div className='reviewstar'>★★★☆☆</div>
        <div className='reviewuser'>장애인 이용자</div>
        </div>
        <div className='reviewdate'>2020.10.23</div>
        </div>
        <div className='reviewcontent'>어쩌구저쩌구 웅앵웅 여기 좋아요 깨끗하고 좋고 최고예요 관리도 너무 잘되어 있고 운영시간도 길고 그냥 최고최고</div>
        <div className='helpbuttoncontainer'>
        <button className='helpbutton'>
        <div>도움이 돼요</div>
        <div className='helpbuttonnum'>128</div>
        </button>
        <button className='helpbutton'>
        <div>도움이 안돼요</div>
        <div className='helpbuttonnum'>22</div>
        </button>
        </div>
      </div>
    </div>
    <MapPage />
    </div>
  )
}

export default DetailPage