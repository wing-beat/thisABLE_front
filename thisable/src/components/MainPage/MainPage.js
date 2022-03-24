import React from "react";
import { Outlet } from "react-router-dom";
import MapPage from "../MapPage/MapPage";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="MainPage">
      <MapPage />
      <div className="MainPageList">
        <Outlet />
      </div>
    </div>
  );
}

export default MainPage;
