import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import { getPlaceList } from "../../services/user.service";
import PlaceInfo from "./PlaceInfo";
import "./MapPage.css";
import slopeImg from "../../assets/images/slope.svg";
import chargerImg from "../../assets/images/charger.svg";
import toiletImg from "../../assets/images/toilet.svg";
import elevatorImg from "../../assets/images/elevator.svg";

function MapPage() {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [places, setPlaces] = useState("");

  if (!navigator.geolocation) {
    console.log("Geolocation is not supported by your browser");
  } else {
    console.log("Locating...");
    navigator.geolocation.watchPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        console.log("lat:", lat, "lng:", lng);
      },
      () => {
        console.log("Unable to retrieve your location");
      }
    );
  }
  const mapStyle = {
    height: "94vh",
    width: "100%",
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
  });

  const [activeMarker, setActiveMarker] = useState(null);
  const [category, setCategory] = useState("");

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  useEffect(async () => {
    const list = await getPlaceList();
    setPlaces(list.results);
  }, []);

  const renderMap = () => {
    return (
      <GoogleMap
        mapContainerStyle={mapStyle}
        zoom={18}
        center={{ lat: +lat, lng: +lng }}
        onClick={() => setActiveMarker(null)}
      >
        {renderBtn()}
        {renderMarker}
        <Marker position={{ lat: +lat, lng: +lng }} />
      </GoogleMap>
    );
  };

  const renderBtn = () => {
    return (
      <div className="btnCont">
        <div className="filterBtnCont">
          <div onClick={() => setCategory("icon1")}>
            <img
              width={20}
              style={{ marginRight: "0.5rem" }}
              src={toiletImg}
            ></img>
            장애인 화장실
          </div>
          <div onClick={() => setCategory("icon2")}>
            <img
              width={20}
              style={{ marginRight: "0.5rem" }}
              src={chargerImg}
            ></img>
            휠체어 충전기
          </div>
          <div onClick={() => setCategory("icon3")}>
            <img
              width={20}
              style={{ marginRight: "0.5rem" }}
              src={elevatorImg}
            ></img>
            엘리베이터
          </div>
          <div onClick={() => setCategory("icon4")}>
            <img
              width={20}
              style={{ marginRight: "0.5rem" }}
              src={slopeImg}
            ></img>
            슬로프
          </div>
          <div onClick={() => setCategory("")}>모두 보기</div>
        </div>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <div className="listViewBtn">리스트 보기</div>
        </Link>
      </div>
    );
  };

  const renderMarker =
    places &&
    places
      .filter((info) => {
        if (category == "icon1") {
          return info.isToiletExists;
        } else if (category == "icon2") {
          return info.isChargerExists;
        } else if (category == "icon3") {
          return info.isElevatorExists;
        } else if (category == "icon4") {
          return info.isSlopeExists;
        } else {
          return true;
        }
      })
      .map((place) => (
        <Marker
          position={{ lat: place.latitude, lng: place.longitude }}
          onClick={() => handleActiveMarker(place._id)}
        >
          {activeMarker === place._id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              {PlaceInfo(place)}
            </InfoWindow>
          ) : null}
        </Marker>
      ));

  return isLoaded ? renderMap() : <CircularProgress />;
}

export default MapPage;
