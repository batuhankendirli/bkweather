import Icon from './Icon';

type CardType = {
  day: string;
  tempature: number;
  feelsLike: number;
  humidity: number;
  wind: number[];
  isActive: boolean;
  firstDay: boolean;
  sunRise: string;
  sunSet: string;
  icon: number;
  onClick: () => void;
};
const WeatherCard = ({
  day,
  tempature,
  feelsLike,
  humidity,
  wind,
  isActive,
  firstDay,
  sunRise,
  sunSet,
  icon,
  onClick,
}: CardType) => {
  return (
    <button
      className={`flex w-40 flex-col border-[3px] duration-200 ${
        isActive
          ? 'flex-1 text-black border-transparent'
          : 'text-white bg-color-tertiary rounded-3xl border-color-primary'
      }`}
      onClick={onClick}
    >
      <p
        className={`${
          isActive ? 'bg-color-fifth' : 'bg-color-tertiary card-after'
        } duration-200 p-2 rounded-t-3xl w-full text-xl font-medium`}
      >
        {day}
      </p>
      <div
        className={`flex-1 rounded-b-3xl p-6 duration-200 -z-[2] ${
          isActive ? ' bg-color-fourth' : 'bg-color-tertiary'
        } flex flex-col w-full`}
      >
        <div className={`flex flex-1 ${isActive ? 'mb-3' : 'flex-col-reverse'} justify-between`}>
          <h2 className={`font-medium text-5xl font-inter`}>{tempature}°</h2>
          <Icon id={icon} />
        </div>

        <div className={`flex justify-between text-left ${isActive ? 'visible' : 'hidden'}`}>
          <div className="truncate">
            <p className="text-sm">
              Hissedilen: <span className="text-base font-medium font-inter">{feelsLike}°</span>
            </p>
            <p className="text-sm">
              Rüzgar: <span className="text-base font-medium font-inter">{`${wind[0]}-${wind[1]}km/sa`}</span>
            </p>
            <p className="text-sm">
              Nem: <span className="text-base font-medium font-inter">%{humidity}</span>
            </p>
          </div>
          {firstDay && (
            <div className="text-left self-end truncate">
              <p className="text-sm">
                Gün doğumu: <span className="text-base font-medium font-inter">{sunRise}</span>
              </p>
              <p className="text-sm">
                Gün batımı: <span className="text-base font-medium font-inter">{sunSet}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </button>
  );
};

export default WeatherCard;
