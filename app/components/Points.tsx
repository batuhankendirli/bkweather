import { useRef, useContext, CSSProperties } from 'react';
import { Context } from '../Context';

type PointsProps = {
  data: number[][];
  width: number;
  height: number;
  setActive: (active: ActiveType) => void;
  range: number[];
};

const Points = ({ data, width, height, setActive, range }: PointsProps) => {
  const { selectedCondition } = useContext(Context) || { selectedCondition: 'tempature' };
  const timeout = useRef();
  const dr = Math.abs(range[1] - range[0]);

  const newPath = data[0]?.some((item) => item <= 0)
    ? data[0]?.map((item) => item - Math.min(...data[0]) + 1)
    : data[0];

  const handleClick = (path: number, point: number) => {
    clearTimeout(timeout.current);
    setActive({ path, point });
  };
  return (
    <div className="points">
      {data?.map((row, r) => {
        return newPath?.map((y, i) => (
          <div
            style={
              {
                '--x': `${(i * width) / (row.length - 1)}px`,
                '--y': `${height - y * (height / dr)}px`,
                cursor: 'pointer',
              } as CSSProperties
            }
            onClick={() => handleClick(r, i)}
            key={i}
          >
            <p className="whitespace-nowrap font-inter text-sm font-semibold text-opacity-30">
              {data[0][i]}
              {selectedCondition === 'humidity' ? '%' : selectedCondition === 'wind' ? 'km/sa' : '°'}
            </p>
          </div>
        ));
      })}
    </div>
  );
};

export default Points;
