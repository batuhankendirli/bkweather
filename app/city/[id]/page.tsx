'use client';

import cities from '../../data/cities.json';
import getWeatherData from '@/app/helpers/getWeatherData';
import { useEffect, useState } from 'react';
import CardsWrapper from '@/app/components/CardsWrapper';
import Nav from '@/app/components/Nav';

interface Params {
  params: { id: number };
}

const CityDetail = ({ params }: Params) => {
  const [cityData, setCityData] = useState<WeatherData>();

  useEffect(() => {
    const getData = async () => {
      try {
        const { latitude, longitude } = cities[params.id - 1];
        const data = await getWeatherData(latitude, longitude);
        setCityData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <Nav />
      {cityData && <CardsWrapper data={cityData} />}
    </div>
  );
};

export default CityDetail;
