import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Accordion,
  AccordionContext,
  Card,
  useAccordionButton,
} from "react-bootstrap";
import { getPlaceDetailCharger } from "../../services/user.service";

function CustomToggle({ children, eventKey, callback }) {
  const [message, setMessage] = useState("▶");
  const { activeEventKey } = useContext(AccordionContext);
  const isCurrentEventKey = activeEventKey === eventKey;

  const decoratedOnClick = useAccordionButton(eventKey, () =>
    setMessage((prev) => (prev === "▶" ? "▼" : "▶"))
  );
  return (
    <button type="button" onClick={decoratedOnClick} className="customtoggle">
      {message}
      {children}
    </button>
  );
}

function ToggleView() {
  const [charger, setCharger] = useState([]);

  let { id } = useParams();

  useEffect(async () => {
    const chargerInfo = await getPlaceDetailCharger(id);
    setCharger(chargerInfo.data);
  }, [id]);

  return (
    <div>
      <Accordion defaultActiveKey={["0"]}>
        <Card>
          <CustomToggle eventKey="1"> 휠체어 충전기 상세정보 보기</CustomToggle>
          <Accordion.Collapse eventKey="1">
            <div className="toggle">
              <div className="togglekey">
                설치 장소
                <br />
                공기 주입 가능
                <br />
                휴대전화 충전
                <br />
                동시 사용 가능 대수
                <br />
                평일 운영 시간
                <br />
                토요일 운영 시간
                <br />
                공휴일 운영 시간
                <br />
                시설명
                <br />
                관리기관명
                <br />
                관리기관 번호
                <br />
                데이터 기준 일자
                <br />
              </div>
              <div className="togglevalue">
                {charger.instllcdesc}
                <br />
                {charger.airinjectoryn}
                <br />
                {charger.moblphonchrstnyn}
                <br />
                {charger.smtmuseco}
                <br />
                {charger.weekdayoperopenhhmm} ~ {charger.weekdayopercolsehhmm}
                <br />
                {charger.satoperoperopenhhmm} ~ {charger.satoperclosehhmm}
                <br />
                {charger.holidayoperopenhhmm} ~ {charger.holidaycloseopenhhmm}
                <br />
                {charger.fcltynm}
                <br />
                {charger.institutionnm}
                <br />
                {charger.institutionphonenumber}
                <br />
                {charger.referencedate}
                <br />
              </div>
            </div>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default ToggleView;
