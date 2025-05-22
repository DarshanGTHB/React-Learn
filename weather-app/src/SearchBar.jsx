import React, { useState } from "react";
import './App.css';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

const SearchBar = ( {updateInfo }) => {
  const [city, setCity] = useState('Delhi');

  let GEOCODE_URL = 'https://api.openweathermap.org/data/2.5/weather?'
  let ApiKey = '9200ceee00e29f7c0d4994fd61a01a01'

  // 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}'

  let getInfoByCityName = async (city) =>{
    let res = await fetch(`${GEOCODE_URL}q=${city}&units=metric&appid=${ApiKey}`);

    res = await res.json();
    // console.log(res.main);
    updateInfo({
      city : city,
        feels_like : res.main.feels_like,
        humidity : res.main.humidity,
        temp : res.main.temp,
        sea_level : res.main.sea_level
    });
  }

  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // alert(`Searching for: ${city}`);
    // Perform actual search logic here
    getInfoByCityName(city);

  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <TextField
        className="search-input"
        placeholder="Search for a city..."
        variant="outlined"
        value={city}
        onChange={handleCity}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit" aria-label="search">
                <SearchIcon style={{ fontSize: '28px', color: '#1976d2' }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default SearchBar;
