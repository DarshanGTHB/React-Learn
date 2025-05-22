import React, { useState } from 'react'
import SearchBar from './SearchBar';
import InfoCard from './InfoCard';

const WeatherApp = () => {

    let [info, setInfo] = useState({
        city : 'Delhi',
        feels_like : 32.9,
        humidity : 51,
        temp : 0,
        sea_level : 0
    })

    let updateInfo = (newInfo) => {
        setInfo(newInfo)
    }
  return (
    <>
    <h1>App</h1>
    <SearchBar updateInfo = {updateInfo}/>
    <InfoCard info={info} />
    </>
  )
}

export default WeatherApp;