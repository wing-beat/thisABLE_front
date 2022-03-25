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
    <button type="button" onClick={decoratedOnClick} className="customToggle">
      {message}
      {children}
    </button>
  );
}

function ToggleView({ detail }) {
  const [charger, setCharger] = useState([]);
  let { id } = useParams();

  useEffect(async () => {
    const chargerInfo = await getPlaceDetailCharger(id);
    setCharger(chargerInfo.data);
  }, [id]);

  return (
    <Accordion defaultActiveKey={["0"]}>
      {detail.isChargerExists && (
        <Card>
          <CustomToggle eventKey="1">휠체어 충전기 상세정보 보기</CustomToggle>
          <Accordion.Collapse eventKey="1">
            <div className="toggle">
              <div>
                <div>설치 장소</div>
                <div>{charger.instllcdesc}</div>
              </div>
              <div>
                <div>공기 주입 가능</div>
                <div>{charger.airinjectoryn}</div>
              </div>
              <div>
                <div>휴대전화 충전</div>
                <div>{charger.moblphonchrstnyn}</div>
              </div>
              <div>
                <div>동시 사용 가능 대수</div>
                <div>{charger.smtmuseco}</div>
              </div>
              <div>
                <div>평일 운영 시간</div>
                <div>
                  {charger.weekdayoperopenhhmm} ~ {charger.weekdayopercolsehhmm}
                </div>
              </div>
              <div>
                <div>토요일 운영 시간</div>
                <div>
                  {charger.satoperoperopenhhmm} ~ {charger.satoperclosehhmm}
                </div>
              </div>
              <div>
                <div>공휴일 운영 시간</div>
                <div>
                  {charger.holidayoperopenhhmm} ~ {charger.holidaycloseopenhhmm}
                </div>
              </div>
              <div>
                <div>시설명</div>
                <div>{charger.fcltynm}</div>
              </div>
              <div>
                <div>관리기관명</div>
                <div>{charger.institutionnm}</div>
              </div>
              <div>
                <div>관리기관 번호</div>
                <div>{charger.institutionphonenumber}</div>
              </div>
              <div>
                <div>데이터 기준 일자</div>
                <div>{charger.referencedate}</div>
              </div>
            </div>
          </Accordion.Collapse>
        </Card>
      )}
    </Accordion>
  );
}

export default ToggleView;
