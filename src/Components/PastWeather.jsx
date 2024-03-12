import React from 'react';

function PastWeather({ cityName, weatherData }) {
  const kelvinToFahrenheit = k => {
    return ((k - 273.15) * 9) / 5 + 32;
  };

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-sky-700 text-xl sm:text-2xl font-bold'>{cityName} Past Weather</h2>
      <div className='flex flex-col gap-4 p-3'>
        {weatherData.historical_weather.map((weather, index) => (
          <div key={index} className='flex bg-white rounded-lg shadow-md p-3'>
            <div>
              <img src={`http://openweathermap.org/img/w/${weather.data[0].weather[0].icon}.png`} alt='Weather Icon' className='w-12 h-12 sm:w-16 sm:h-16 mr-3 sm:mr-4 float-left' />
            </div>
            <div>
              <h3 className='text-lg font-semibold'>Date: {new Date(weather.data[0].dt * 1000).toLocaleDateString()}</h3>
              <p>Temperature: {kelvinToFahrenheit(weather.data[0].temp).toFixed(2)}°F</p>
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
