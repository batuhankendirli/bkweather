'use client';

import { useState } from 'react';
import WeatherCard from './WeatherCard';

const CardsWrapper = ({ data }: { data: WeatherData }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const feelsLike = data.map((item) =>
    Math.round(item.feelsLike.reduce((acc, curr) => acc + curr, 0) / item.feelsLike.length)
  );
  const humidity = data.map((item) =>
    Math.round(item.humidity.reduce((acc, curr) => acc + curr, 0) / item.humidity.length)
  );
  const wind = data.map((item) => [Math.round(Math.min(...item.wind)), Math.round(Math.max(...item.wind))]);
  const { sunrise, sunset } = data[0].sun;
  const day = data.map((item) => item.day);
  const icon = data.map((item) => item.status);
  const tempature = data.map((item) =>
    Math.round(item.tempature.reduce((acc, curr) => acc + curr, 0) / item.tempature.length)
  );

  return (
    <div className="flex gap-3">
      {data.map((_, index) => (
        <WeatherCard
          key={index}
          firstDay={index === 0}
          isActive={index === activeCardIndex}
          onClick={() => setActiveCardIndex(index)}
          feelsLike={feelsLike[index]}
          humidity={humidity[index]}
          wind={wind[index]}
          sunRise={sunrise}
          sunSet={sunset}
          day={day[index]}
          icon={icon[index][0].id}
          tempature={tempature[index]}
        />
      ))}
    </div>
  );
};

export default CardsWrapper;
