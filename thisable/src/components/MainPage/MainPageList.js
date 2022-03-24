import React, {useState, useEffect} from 'react'
import './MainPage.css'
import PlaceInfo from '../MapPage/PlaceInfo';
import PaginationView from './PaginationView';
import {getPlaceList} from '../../services/user.service';

function MainPageList() {
  const [places, setPlaces] = useState("")

  useEffect(async () => {
    const list = await getPlaceList();
    setPlaces(list)
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