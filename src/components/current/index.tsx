import React from 'react';

export default function Current(
  props: { data: ICurrentProps[] }
) {

  console.log(props);

  if (!props.data?.length) {
    return (
      <div>
        <h1>Check the weather of your city!</h1>
      </div>
    );
  }

  return (
    <div>
      {
        props.data && props.data.map(({
          dt,
          main,
          weather,
          wind
        } : ICurrentProps,index:number ) => {

          const currentWeather = weather[0];
          let weatherIcon;

          switch(currentWeather.main) {
            case 'Clear':
              weatherIcon = '/clear.svg';
              break;
            case 'Clouds':
              weatherIcon = '/clouds.svg';
              break;
            case 'Rain':
              weatherIcon = '/rain.svg';
              break;
            case 'Snow':
              weatherIcon = '/snow.svg';
              break;
            default:
              weatherIcon = '/clear.svg';
          }

          return (
            <div key={index} className={`flex flex-col items-center gap-5 pb-20` }>
              <h1>Current Weather</h1>
              <img src={weatherIcon} alt="Weather Icon" />
              <p>Last Updated: {new Date(dt * 1000).toLocaleString()}</p>
              <p>Temperature: {(main.temp - 273.15).toFixed(1)} °C</p>
              <p>Weather: {currentWeather.main}</p>
              <p>Wind Speed: {wind.speed} m/s</p>
            </div>
          );
        })
      }
    </div>
  );
}