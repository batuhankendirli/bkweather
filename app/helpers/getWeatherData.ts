import dayjs from 'dayjs';
import { findDay } from './day';
import { toUpper } from './toUpper';

const getWeatherData = async (
  lat: string,
  lon: string
): Promise<WeatherData> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WEATHER_LINK}forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API}&units=metric&lang=tr`,
    {
      cache: 'no-store',
    }
  );
  const data: WeatherResponse = await res.json();

  const dates: number[] = [];
  const days: string[] = [];
  const hours: number[][] = [];
  const tempature: number[][] = [];
  const feelsLike: number[][] = [];
  const humidity: number[][] = [];
  const wind: number[][] = [];
  const status: { description: string; id: number }[][] = [];
  const allData: WeatherData = [];

  data.list.map((item) => {
    const dataDate = dayjs(item.dt_txt).get('date');
    const dateDay = findDay(dayjs(item.dt_txt).get('day'));
    if (!dates.includes(dataDate)) {
      dates.push(dataDate);
      days.push(dateDay);
    }
  });

  dates.map((date, index) => {
    const hourArr: number[] = [];
    const tempatureArr: number[] = [];
    const feelsLikeArr: number[] = [];
    const humidityArr: number[] = [];
    const windArr: number[] = [];
    const statusArr: { description: string; id: number }[] = [];

    data.list.map((item) => {
      if (date === dayjs(item.dt_txt).get('date')) {
        hourArr.push(dayjs(item.dt_txt).get('hours'));
        tempatureArr.push(Math.round(item.main.temp));
        feelsLikeArr.push(Math.round(item.main.feels_like));
        humidityArr.push(item.main.humidity);
        windArr.push(item.wind.speed);
        statusArr.push({
          description: toUpper(item.weather[0].description),
          id: item.weather[0].id,
        });
      }
    });
    hours.push(hourArr);
    tempature.push(tempatureArr);
    feelsLike.push(feelsLikeArr);
    humidity.push(humidityArr);
    wind.push(windArr);
    status.push(statusArr);

    allData.push({
      date,
      day: days[index],
      hours: hours[index],
      tempature: tempature[index],
      feelsLike: feelsLike[index],
      humidity: humidity[index],
      wind: wind[index],
      status: status[index],
      sun: {
        sunrise: dayjs
          .unix(data.city.sunrise)
          .toDate()
          .toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
        sunset: dayjs
          .unix(data.city.sunset)
          .toDate()
          .toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
      },
    });
  });

  return allData;
};

export default getWeatherData;
