import React, {useContext, useState} from 'react'
import { Accordion, AccordionContext, Card, useAccordionButton } from 'react-bootstrap';

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

function ToggleView() {
  return (
    <div>
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
  )
}

export default ToggleView