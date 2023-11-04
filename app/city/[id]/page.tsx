import cities from '../../data/cities.json';
import getWeatherData from '@/app/helpers/getWeatherData';
import CardsWrapper from '@/app/components/CardsWrapper';
import Nav from '@/app/components/Nav';
import Graph from '@/app/components/Graph';
import Conditions from '@/app/components/Conditions';

interface Params {
  params: { id: number };
}

const CityDetail = async ({ params }: Params) => {
  const { latitude, longitude } = cities[params.id - 1];
  const cityData = await getWeatherData(latitude, longitude);

  return (
    <div>
      <Nav />
      <CardsWrapper data={cityData} />
      <Conditions />
      <Graph data={cityData} />
    </div>
  );
};

export default CityDetail;
