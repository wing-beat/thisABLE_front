import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from './components/DetailPage/DetailPage';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <NavBar/> */}
        <div>        
          <Routes>
            <Route exact path="/" element={<MainPage />}></Route>
            <Route path="/detail/:id" element={<DetailPage />}></Route>            
          </Routes>
        </div>
      </BrowserRouter> 
    </div>
  );
}

export default App;
