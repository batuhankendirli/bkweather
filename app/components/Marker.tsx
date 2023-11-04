import { CSSProperties } from 'react';

type MarkerProps = {
  colors: string[];
  data: number[][];
  active: {
    path: number;
    point: number;
  };
  width: number;
  height: number;
  range: number[];
};

const Marker = ({ colors, data, active, width, height, range }: MarkerProps) => {
  const newPath = data[0]?.some((item) => item <= 0)
    ? data[0]?.map((item) => item - Math.min(...data[0]) + 1)
    : data[0];

  const { path, point } = active || {};
  const value = newPath?.[point];
  const dr = Math.abs(range[1] - range[0]);
  return (
    <div
      className="marker"
      style={
        {
          opacity: active ? 1 : 0,
          '--color': colors[path],
          '--x': `${(point * width) / (data[path]?.length - 1)}px`,
          '--y': `${height - value * (height / dr)}px`,
        } as CSSProperties
      }
    >
      <div className="line" />
      <div className="circle" />
    </div>
  );
};

export default Marker;
