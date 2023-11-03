import React from 'react';
import cities from '../data/cities.json';
import { useParams } from 'next/navigation';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Link from 'next/link';

const Nav = () => {
  const { id } = useParams();

  return (
    <nav className="flex justify-between items-center mb-4 py-4 border-b-2 border-[#333]">
      <Link href={'/'} className="flex gap-2 items-center group">
        <AiOutlineArrowLeft className="text-lg group-hover:-translate-x-1 sm:text-2xl duration-300 will-change-transform" />
        <p className="text-lg border-b-2 border-white border-opacity-0 duration-300 group-hover:border-opacity-100">
          Geri Dön
        </p>
      </Link>
      <select
        name="select"
        id="select-cities"
        value={cities[Number(id) - 1].name}
        className="text-base sm:text-lg bg-transparent border-2 border-color-secondary text-color-fifth px-1 sm:px-3 py-1 font-medium focus:outline-none"
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
