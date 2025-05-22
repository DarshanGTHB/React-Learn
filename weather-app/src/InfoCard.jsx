import React from 'react';
import './InfoCard.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import OpacityIcon from '@mui/icons-material/Opacity';
import CompressIcon from '@mui/icons-material/Compress';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const InfoCard = ({ info }) => {
  return (
    <div className="info-card">
      <h2><LocationOnIcon /> {info.city}</h2>
      <div className="weather-details">
        <div className="detail">
          <ThermostatIcon style={{ color: '#f44336' }} />
          <span>Feels Like: <strong>{info.feels_like} °C</strong></span>
        </div>
        <div className="detail">
          <WbSunnyIcon style={{ color: '#ff9800' }} />
          <span>Temperature: <strong>{info.temp} °C</strong></span>
        </div>
        <div className="detail">
          <OpacityIcon style={{ color: '#2196f3' }} />
          <span>Humidity: <strong>{info.humidity} %</strong></span>
        </div>
        <div className="detail">
          <CompressIcon style={{ color: '#9c27b0' }} />
          <span>Sea Level: <strong>{info.sea_level} hPa</strong></span>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
