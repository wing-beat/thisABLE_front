import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './MainPage.css'
import slopeImg from '../../assets/images/slope.svg'
import PlaceInfo from '../MapPage/PlaceInfo';
import PaginationView from './PaginationView';

function MainPageList() {
  const [places, setPlaces] = useState("")
  const baseUrl = process.env.REACT_APP_BASE_URL;
  
  const getData = async () => { 
    await axios.get(
      baseUrl + "/?latitude=37.5441270&longitude=126.9667812&page=1"  
    )
    .then((response) => {
      setPlaces(response.data)
      console.log(response.data) 
      console.log(response.data.results)
    })
    .catch((error)=>{console.log(error)})
  };  
  useEffect(() => {
    getData();
  }, []);


  const renderPlaces = places && places.results.map(place => {
    return (
      <div className='PlaceListContainer' key={place.location_code}>
        {PlaceInfo(place)}
      </div>      
    )
  })

  const handleCallback = (changedPage) => {
    console.log("넘어온 페이지네이션 페이지", changedPage)
  }

  return (
    <div>      
      {renderPlaces}
      <PaginationView page={places} handleCallback={handleCallback} />
    </div>
  )
}

export default MainPageList