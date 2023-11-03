'use client';

import cities from '../../data/cities.json';
import getWeatherData from '@/app/helpers/getWeatherData';
import WeatherCard from '@/app/components/WeatherCard';
import { useEffect, useState } from 'react';
import CardsWrapper from '@/app/components/CardsWrapper';

interface Params {
  params: { id: string };
}

const CityDetail = ({ params }: Params) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [cityData, setCityData] = useState<WeatherData>();

  useEffect(() => {
    const getData = async () => {
      try {
        const { latitude, longitude } = cities[Number(params.id) - 1];
        const data = await getWeatherData(latitude, longitude);
        setCityData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  console.log(cityData);

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">{params.id}</h1>
      {cityData && <CardsWrapper data={cityData} />}
    </div>
  );
};

export default CityDetail;
