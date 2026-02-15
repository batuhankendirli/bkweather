'use client';

import {
  CSSProperties,
  ChangeEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import cities from './data/cities.json';
import City from './components/City';
import TurkeyMap, { CityType } from 'turkey-map-react';
import { useRouter } from 'next/navigation';
import { remove } from 'remove-accents';

type Tabs = 'cities' | 'map';

const Home = () => {
  const [activeTab, setActiveTab] = useState<Tabs>('cities');
  const [search, setSearch] = useState('');
  const [filteredCities, setFilteredCities] = useState(cities);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<Position>({
    left: null,
    top: null,
    width: null,
    height: null,
  });

  const { push } = useRouter();

  useEffect(() => {
    const element = parentRef.current?.querySelector('.active');
    if (element) {
      const { top, width, height } = element.getBoundingClientRect();
      const left = (element as HTMLElement).offsetLeft;
      setPosition({
        left,
        top,
        width,
        height,
      });
    }
  }, []);

  const handleClick = (e: MouseEvent, tab: Tabs) => {
    setActiveTab(tab);
    const { top, width, height } = e.currentTarget.getBoundingClientRect();
    const left = (e.currentTarget as HTMLElement).offsetLeft;
    setPosition({
      left,
      top,
      width,
      height,
    });
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchInput = remove(e.target.value).toLowerCase();
    setSearch(e.target.value);
    setFilteredCities(
      cities.filter((city) => {
        const cityNameNormalized = remove(city.name).toLowerCase();
        const plateNumber = city.id.toString();
        return (
          cityNameNormalized.includes(searchInput) ||
          plateNumber.includes(searchInput)
        );
      }),
    );
  };

  const handleMapClick = (city: CityType) => {
    push(`city/${city.plateNumber}`);
  };

  return (
    <div className="flex flex-col min-h-full">
      <h1 className="text-5xl font-semibold text-center mb-8">
        Türkiye - İllere Göre Hava Durumu
      </h1>
      <div
        className="sticky top-4 flex p-1 mb-8 bg-gradient-to-br from-color-fourth to-color-fifth rounded-full text-color-tertiary self-center shadow-xl"
        ref={parentRef}
      >
        <div
          className="selection bg-color-tertiary rounded-full"
          style={
            {
              '--left': `${position.left}px`,
              '--top': `${position.top}px`,
              '--width': `${position.width}px`,
              '--height': `${position.height}px`,
            } as CSSProperties
          }
        />

        <button
          className={`py-2 px-4 font-semibold text-lg relative duration-100 ${
            !position.left ? 'bg-color-tertiary rounded-full' : ''
          } ${activeTab === 'cities' ? 'active text-white' : ''}`}
          onClick={(e) => handleClick(e, 'cities')}
        >
          Şehir Listesi
        </button>
        <button
          className={`py-2 px-4 font-semibold text-lg relative duration-100 ${
            activeTab === 'map' ? 'active text-white' : ''
          }`}
          onClick={(e) => (
            handleClick(e, 'map'),
            setSearch(''),
            setFilteredCities(cities)
          )}
        >
          Harita
        </button>
      </div>
      {activeTab === 'cities' ? (
        <div className="flex self-stretch flex-col gap-6">
          <div className="self-center w-full sm:w-1/2 bg-gradient-to-br from-color-fourth to-color-fifth rounded-full p-1">
            <input
              type="text"
              placeholder="Şehirlerde ara..."
              className="bg-color-tertiary py-2 px-6 text-lg w-full rounded-full focus:outline-none"
              value={search}
              onChange={(e) => handleSearch(e)}
            />
          </div>
          <div className="grid gap-4 grid-cols-city ">
            {filteredCities.map((city) => (
              <City key={city.id} name={city.name} code={city.id} />
            ))}
          </div>
          {filteredCities.length < 1 ? (
            <div className="flex flex-col items-center w-full bg-red-400 py-6 gap-4 rounded-xl">
              <p className="text-white font-medium text-xl text-center">
                Aradığınız kriteri sağlayan bir şehir bulunamadı.
              </p>
              <button
                className="bg-color-tertiary text-white text-lg font-medium rounded-full px-8 py-3 shadow-lg duration-300 hover:scale-[1.03] hover:shadow-xl  active:scale-100 active:shadow-md"
                onClick={() => (setSearch(''), setFilteredCities(cities))}
              >
                Filtreyi sıfırla
              </button>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="flex-1 flex items-center">
          <div className="flex-1">
            <TurkeyMap
              hoverable
              customStyle={{ idleColor: '#888', hoverColor: '#bbd7ec' }}
              showTooltip
              onClick={(city) => handleMapClick(city)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
