import cities from '../../data/cities.json';
import getWeatherData from '@/app/helpers/getWeatherData';
import CardsWrapper from '@/app/components/CardsWrapper';
import Nav from '@/app/components/Nav';
import Graph from '@/app/components/Graph';
import Conditions from '@/app/components/Conditions';
import CityInfo from '@/app/components/CityInfo';

interface Params {
  params: { id: number };
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;

  return {
    title: `${cities[Number(id) - 1].name} Hava Durumu | Batuhan Kendirli`,
  };
}

export default async function CityDetail(props: Params) {
  const { id } = await props.params;
  console.log(id);
  const { latitude, longitude } = cities[Number(id) - 1];
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
}
