import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Current from '@/components/current';
import FiveDays from '@/components/fiveDay';

export default function Home() {
  const [city, setCity] = useState('');
  const [currentData, setCurrentData] = useState<ICurrentProps[]>([]);
  const [fiveDaysData, setFiveDaysData] = useState<IFiveProps[]>([]);
  const [cityName, setCityName] = useState('');

  const apiKey = 'f326ba19e337865f6cff8010adebc05a';

  const grabInfo = async () => {
    try {
      const urlGeocoding = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
      const geoResponse = await fetch(urlGeocoding);
      const geoData = await geoResponse.json();

      if (geoData && geoData.length > 0) {
        const { lat, lon, name } = geoData[0];
        const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        const urlFiveDaysWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

        const [currentResponse, fiveDaysResponse] = await Promise.all([
          fetch(urlWeather),
          fetch(urlFiveDaysWeather)
        ]);

        const currentData = await currentResponse.json();
        const fiveDaysData = await fiveDaysResponse.json();

        setCurrentData([currentData]);
        setFiveDaysData([fiveDaysData]);
        setCityName(name);
        // console.log(currentData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // console.log(currentData);
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between bg-white` }>
      <Head>
        <link rel="icon" href="/logo.svg" />
        <title>Weather Forecast</title>
      </Head>
      <header className={`flex flex-col items-center text-2xl gap-5 bg-sky-500 w-screen p-5 decoration-white`}>
        <Image
          src="/logo.svg"
          width={70}
          height={70}
          alt="logo"
        />
        <h1 className={`decoration-white`}>Weather Forecast</h1>
      </header>
      <div className={`flex gap-5 pt-10`}>
        <input
          type="text"
          placeholder="Enter the city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={`border-2 border-gray-300 rounded-2xl p-5`}
        />
        <button onClick={grabInfo}>Search</button>
      </div>
      <h1 className={`text-2xl pt-10`}>{cityName}</h1> 
      <div className={`p-10`}>
        <Current data={currentData} />
        <FiveDays data={fiveDaysData} />
      </div>
      <footer className={`flex flex-col items-center text-xl gap-5 bg-sky-500 w-screen p-5 decoration-white`}>
        <p>Created by Yanjun</p>
      </footer>
    </main>
  );
}