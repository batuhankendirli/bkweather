type WeatherResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    clouds: unknown;
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    visibility: number;
    pop: number;
    rain: unknown;
    sys: unknown;
    dt_txt: string;
  }[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
};

type WeatherData = {
  date: number;
  day: string;
  hours: number[];
  tempature: number[];
  feelsLike: number[];
  humidity: number[];
  wind: number[];
  status: { description: string; id: number }[];
  sun: {
    sunrise: string;
    sunset: string;
  };
}[];

type Position = {
  left: number | null;
  top: number | null;
  width: number | null;
  height: number | null;
};

type ActiveType = {
  path: number;
  point: number;
};

type ConditionType = 'tempature' | 'wind' | 'humidity' | 'feelsLike';
