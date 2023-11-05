'use client';

import React, { useContext } from 'react';
import cities from '../data/cities.json';
import { useParams, useRouter } from 'next/navigation';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Link from 'next/link';
import { Context } from '../Context';

const Nav = () => {
  const { id } = useParams();
  const { replace } = useRouter();
  const { setSelectedDay, setSelectedCondition, setActive, setGraphColor } = useContext(Context) || {
    setSelectedDay: () => {},
    setSelectedCondition: () => {},
    setActive: () => {},
    setGraphColor: () => {},
  };

  const reset = () => {
    setSelectedDay(0);
    setSelectedCondition('tempature');
    setActive({ path: 0, point: 0 });
    setGraphColor('#f7d500');
  };

  const handleChange = (cityId: number) => {
    replace(String(cityId));
    reset();
  };

  return (
    <nav className="flex justify-between items-center mb-4 py-4 border-b-2 border-color-fourth border-opacity-10">
      <Link href={'/'} onClick={reset} className="flex gap-2 items-center group">
        <AiOutlineArrowLeft className="text-lg group-hover:-translate-x-1 sm:text-2xl duration-300 will-change-transform" />
        <p className="text-lg border-b-2 border-white border-opacity-0 duration-300 group-hover:border-opacity-100">
          Geri Dön
        </p>
      </Link>
      <select
        name="select"
        id="select-cities"
        value={cities[Number(id) - 1].name}
        onChange={(e) => handleChange(e.target.selectedIndex + 1)}
        className="text-base sm:text-lg bg-transparent border-[3px] border-color-primary rounded-md text-white px-1 sm:px-3 py-1 font-medium focus:outline-none"
      >
        {cities.map((city) => {
          return (
            <option value={city.name} key={city.id} className="bg-color-tertiary">
              {city.name}
            </option>
          );
        })}
      </select>
    </nav>
  );
};

export default Nav;
