'use client';

import { useContext, useState } from 'react';
import WeatherCard from './WeatherCard';
import { Context } from '../Context';

const CardsWrapper = ({ data }: { data: WeatherData }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const { setSelectedDay, setActive } = useContext(Context) || {
    setSelectedDay: () => {},
    setActive: () => {},
  };

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

  const handleClick = (cardIndex: number) => {
    setActiveCardIndex(cardIndex);
    setSelectedDay(cardIndex);
    setActive({ path: 0, point: 0 });
  };

  return (
    <div className="flex gap-3 overflow-x-auto pb-2 wrapper-scroll">
      {data.map((_, index) => (
        <WeatherCard
          key={index}
          firstDay={index === 0}
          isActive={index === activeCardIndex}
          onClick={() => handleClick(index)}
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
