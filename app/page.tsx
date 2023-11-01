'use client';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import cities from './data/cities.json';
import City from './components/City';
import TurkeyMap, { CityType } from 'turkey-map-react';
import { useRouter } from 'next/navigation';

type Tabs = 'cities' | 'map';

const Home = () => {
  const [search, setSearch] = useState('');
  const [filteredCities, setFilteredCities] = useState(cities);
  const [activeTab, setActiveTab] = useState<Tabs>('cities');
  const [position, setPosition] = useState({});
  const parentRef = useRef(null);

  const { push } = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setFilteredCities(cities.filter((city) => city.name.toLowerCase().includes(e.target.value.toLowerCase())));
  };

  const handleMapClick = (city: CityType) => {
    push(`city/${city.plateNumber}`);
  };

  const handleClick = (e, tab: Tabs) => {
    setActiveTab(tab);
    const { top, width, height } = e.target.getBoundingClientRect();
    const left = e.target.offsetLeft;
    setPosition({
      left,
      top,
      width,
      height,
    });
  };

  useEffect(() => {
    const element = parentRef.current.querySelector('.active');
    const { top, width, height } = element.getBoundingClientRect();
    const left = element.offsetLeft;

    setPosition({
      left,
      top,
      width,
      height,
    });
  }, []);

  return (
    <div className="flex flex-col justify-between bg-slate-800 rounded-md p-8 max-w-[80rem] min-h-screen mx-auto my-[4vw] sm:p-12">
      <div className="flex flex-col min-h-screen">
        <h1 className="text-5xl font-semibold text-center mb-8">Türkiye - İllere Göre Hava Durumu</h1>
        <div className="sticky top-4 flex p-2 bg-gradient-to-br from-cyan-100 to-cyan-800 rounded-md text-color-tertiary mb-8 self-center shadow-lg" ref={parentRef}>
          <div
            className="selection bg-white rounded-md"
            style={{
              '--left': position.left + 'px',
              '--top': position.top + 'px',
              '--width': position.width + 'px',
              '--height': position.height + 'px',
            }}
          />

          <button className={`py-2 px-4 font-semibold text-lg duration-100 ${activeTab === 'cities' ? 'active text-black' : ''}`} onClick={(e) => handleClick(e, 'cities')}>
            Şehir Listesi
          </button>
          <button className={`py-2 px-4 font-semibold text-lg duration-100 ${activeTab === 'map' ? 'active text-black' : ''}`} onClick={(e) => (handleClick(e, 'map'), setSearch(''), setFilteredCities(cities))}>
            Harita
          </button>
        </div>
        {activeTab === 'cities' ? (
          <div className="flex self-stretch flex-col gap-4">
            <div className="self-center w-full sm:w-1/2 bg-gradient-to-br from-slate-700 to-slate-400 rounded-md p-1">
              <input type="text" placeholder="Şehirlerde ara..." className="bg-slate-800 py-2 px-6 text-lg w-full rounded-md focus:outline-none" value={search} onChange={(e) => handleSearch(e)} />
            </div>
            <div className="grid gap-4 grid-cols-city ">
              {filteredCities.map((city) => (
                <City key={city.id} name={city.name} code={city.id} />
              ))}
            </div>
            {filteredCities.length < 1 ? (
              <div className="flex flex-col items-center w-full bg-red-400 py-6 gap-4">
                <p className="text-color-tertiary font-medium text-xl text-center">Aradığınız kriteri sağlayan bir şehir bulunamadı.</p>
                <button className="bg-color-tertiary text-color-fifth text-lg font-medium rounded-full px-8 py-3 shadow-lg duration-300 hover:scale-[1.03] hover:shadow-xl  active:scale-100 active:shadow-md" onClick={() => (setSearch(''), setFilteredCities(cities))}>
                  Filtreyi sıfırla
                </button>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="flex-1 flex items-center">
            <div className="flex-1">
              <TurkeyMap hoverable customStyle={{ idleColor: '#888', hoverColor: '#0083b0' }} showTooltip onClick={(city) => handleMapClick(city)} />
            </div>
          </div>
        )}
      </div>
      <footer>Batuhan Kendirli</footer>
    </div>
  );
};

export default Home;
