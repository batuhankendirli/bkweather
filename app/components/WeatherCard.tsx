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
      className={`flex flex-col h-60 border-[3px] transition-all duration-200 ${
        isActive
          ? 'text-black border-transparent w-[20rem]'
          : 'text-white bg-color-tertiary rounded-3xl border-color-primary w-[10rem] min-w-[10rem]'
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
        className={`flex-1 rounded-b-3xl p-3 duration-200 -z-[2] ${
          isActive ? ' bg-color-fourth' : 'bg-color-tertiary justify-center'
        } flex w-full ${firstDay ? 'flex-row gap-3 justify-around' : 'flex-col gap-2'}`}
      >
        <div
          className={`flex gap-3 items-center ${
            isActive && !firstDay ? 'justify-between gap-8' : 'flex-col-reverse self-center'
          } ${firstDay ? 'flex-col-reverse justify-center' : ''}`}
        >
          <h2 className={`font-medium text-5xl font-inter`}>{tempature}°</h2>
          <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-[#100f14] bg-opacity-75">
            <Icon id={icon} />
          </div>
        </div>

        <div
          className={`flex text-left ${isActive ? 'visible' : 'hidden'} ${
            firstDay ? 'flex-col justify-evenly' : 'justify-between gap-2'
          }`}
        >
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
          {firstDay && <hr className="bg-[#333] bg-opacity-10 rounded-full border-none h-[2px] " />}
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
