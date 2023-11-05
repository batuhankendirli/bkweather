import cities from '../../data/cities.json';
import getWeatherData from '@/app/helpers/getWeatherData';
import CardsWrapper from '@/app/components/CardsWrapper';
import Nav from '@/app/components/Nav';
import Graph from '@/app/components/Graph';
import Conditions from '@/app/components/Conditions';
import CityInfo from '@/app/components/CityInfo';
import { Metadata } from 'next';

interface Params {
  params: { id: number };
}

type Props = {
  params: { id: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const id = params.id;

  return {
    title: `${cities[Number(id) - 1].name} Hava Durumu | Batuhan Kendirli`,
  };
}

const CityDetail = async ({ params }: Params) => {
  const { latitude, longitude } = cities[params.id - 1];
  const cityData = await getWeatherData(latitude, longitude);

  return (
    <>
      <Nav />
      <CityInfo data={cityData} />
      <Conditions />
      <Graph data={cityData} />
      <CardsWrapper data={cityData} />
    </>
  );
};

export default CityDetail;
