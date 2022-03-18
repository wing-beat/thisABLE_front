import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailPage from './components/DetailPage/DetailPage';
import MainPage from './components/MainPage/MainPage';
import MapPage from './components/MapPage/MapPage';
import NavBar from './components/NavBar/NavBar';
import MainPageList from './components/MainPage/MainPageList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <div>        
          <Routes>
            <Route exact path="/" element={<MainPage />}>
              <Route path="/detail/:id" element={<DetailPage />}></Route>                  
            </Route>
            <Route path="/map" element={<MapPage />}></Route>            
          </Routes>
        </div>
      </BrowserRouter> 
    </div>
  );
}

export default App;
