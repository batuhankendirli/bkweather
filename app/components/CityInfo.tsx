'use client';

import { useParams } from 'next/navigation';
import cities from '../data/cities.json';
import Icon from './Icon';
import { useContext } from 'react';
import { Context } from '../Context';

const CityInfo = ({ data }: { data: WeatherData }) => {
  const { id } = useParams();
  const { active, selectedDay } = useContext(Context) || { active: { path: 0, point: 0 }, selectedDay: 0 };

  const cityName = cities[Number(id) - 1].name;
  const tempature = `${data[selectedDay].tempature[active.point]}°`;
  const iconId = data[selectedDay].status[active.point].id;
  const day = data[selectedDay].day;
  const hour = String(data[selectedDay].hours[active.point]);
  const styledHour = hour.length === 2 ? `${hour}:00` : `0${hour}:00`;
  const description = data[selectedDay].status[active.point].description;

  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2 sm:gap-3">
        <Icon id={iconId} />
        <p className="text-3xl font-semibold font-inter sm:text-4xl">{tempature}</p>
      </div>
      <div className="text-right text-sm font-medium text-white sm:text-base">
        <p className="text-xl font-bold sm:text-3xl">{cityName}</p>
        <p className="text-color-fourth">
          {day} - <span className="font-inter">{styledHour}</span>
        </p>
        <p className="text-xs text-color-fourth sm:text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CityInfo;
