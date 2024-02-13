export default function FiveDays(
  props: { data: IFiveProps[] }
) {

  console.log(props);

if (!props.data?.length) {
  return (
    <div>
      {/* <h1>No weather data found</h1> */}
    </div>
  );
}

console.log(props.data);

return (
  <div>
    {
      props.data && props.data.map(({
        list,
        // dt_txt,
        // main,
        // weather,
        // wind
      }: IFiveProps,index:number ) => {
        const fiveDaysData_0 = list[0];
        const fiveDaysData_1 = list[8];
        const fiveDaysData_2 = list[16];
        const fiveDaysData_3 = list[24];
        const fiveDaysData_4 = list[36];
        // const fiveDaysWeatherData_0 = weather[0];

        return(
          <div className={`flex flex-col items-center gap-10 pb-20` }>
            <h1 className={`` }>Weather in 5 days</h1>
            <div key={index} className={`flex flex-col items-center gap-10 pb-20` }>
              <div>
                <p>Last Updated: {new Date(fiveDaysData_0.dt_txt).toLocaleString()}</p>
                <p>Temperature: {(fiveDaysData_0.main.temp - 273.15).toFixed(1)} °C</p>
                <p>Weather: {fiveDaysData_0.weather.main} {fiveDaysData_0.weather.description}</p>
                <p>Wind Speed: {fiveDaysData_0.wind.speed} m/s</p>
              </div>
              <div>
                <p>Last Updated: {new Date(fiveDaysData_1.dt_txt).toLocaleString()}</p>
                <p>Temperature: {(fiveDaysData_1.main.temp - 273.15).toFixed(1)} °C</p>
                <p>Weather: {fiveDaysData_1.weather.main} {fiveDaysData_1.weather.description}</p>
                <p>Wind Speed: {fiveDaysData_1.wind.speed} m/s</p>
              </div>
              <div>
                <p>Last Updated: {new Date(fiveDaysData_2.dt_txt).toLocaleString()}</p>
                <p>Temperature: {(fiveDaysData_2.main.temp - 273.15).toFixed(1)} °C</p>
                <p>Weather: {fiveDaysData_2.weather.main} {fiveDaysData_1.weather.description}</p>
                <p>Wind Speed: {fiveDaysData_2.wind.speed} m/s</p>
              </div>
              <div>
                <p>Last Updated: {new Date(fiveDaysData_3.dt_txt).toLocaleString()}</p>
                <p>Temperature: {(fiveDaysData_3.main.temp - 273.15).toFixed(1)} °C</p>
                <p>Weather: {fiveDaysData_3.weather.main} {fiveDaysData_1.weather.description}</p>
                <p>Wind Speed: {fiveDaysData_3.wind.speed} m/s</p>
              </div>
              <div>
                <p>Last Updated: {new Date(fiveDaysData_4.dt_txt).toLocaleString()}</p>
                <p>Temperature: {(fiveDaysData_4.main.temp - 273.15).toFixed(1)} °C</p>
                <p>Weather: {fiveDaysData_4.weather.main} {fiveDaysData_1.weather.description}</p>
                <p>Wind Speed: {fiveDaysData_4.wind.speed} m/s</p>
              </div>
            </div>
          </div>
        )
      })
    }
  </div>
  );
}
