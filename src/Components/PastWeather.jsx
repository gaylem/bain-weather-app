import React from 'react';
import { kelvinToFahrenheit } from '../utils';

function PastWeather({ cityName, weatherData }) {
  //! Add error handling
  if (!weatherData) {
    return null;
  }

  return (
    <div className='container mx-auto p-1 md:p-2 lg:p-5'>
      <hr />
      {/* //! First letter of cityName always capitalized */}
      <h2 className='h2 [text-shadow:_0_1px_5px_rgb(0_0_0_/_20%)] p-4 md:p-4 lg:p-5'>
        {cityName
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')}{' '}
        Past Weather
      </h2>
      <div className='flex flex-wrap flex-col gap-4'>
        {weatherData.historical_weather.map((weather, index) => (
          <div key={index} className='flex flex-wrap bg-white rounded-lg shadow-md'>
            <div className='flex justify-center items-center p-1 md:p-2 lg:p-5'>
              <img src={`http://openweathermap.org/img/w/${weather.data[0].weather[0].icon}.png`} alt='Weather Icon' className='w-12 h-12' />
            </div>
            <div className='p-3 md:p-4 lg:p-5'>
              <h3 className='text-lg font-semibold'>Date: {new Date(weather.data[0].dt * 1000).toLocaleDateString()}</h3>
              <p>Temperature: {kelvinToFahrenheit(weather.data[0].temp)}°F</p>
              <p>Main Weather: {weather.data[0].weather[0].main}</p>
              <p>Description: {weather.data[0].weather[0].description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PastWeather;
