'use client';

import Line from './Line';
import Marker from './Marker';
import Points from './Points';
import { useRef, useContext, CSSProperties } from 'react';
import { useDimensions } from 'webrix/hooks';
import { Context } from '../Context';

type GraphProps = {
  data: WeatherData;
};

const Graph = ({ data }: GraphProps) => {
  const { active, setActive, selectedDay, selectedCondition, graphColor } = useContext(Context) || {
    active: { path: 0, point: 0 },
    setActive: () => {},
    selectedDay: 0,
    selectedCondition: 'tempature',
    graphColor: '#f7d500',
  };

  const graph = useRef<HTMLDivElement | null>(null);
  const { width, height } = useDimensions(graph);
  const maxLimit =
    Math.min(...data[selectedDay][selectedCondition]) < 0
      ? Math.max(...data[selectedDay][selectedCondition]) +
        Math.abs(Math.min(...data[selectedDay][selectedCondition])) +
        2
      : Math.max(...data[selectedDay][selectedCondition]) + 2;
  const range = [0, maxLimit];

  return (
    <>
      <div className="graph mb-32" ref={graph}>
        <Marker
          colors={[graphColor]}
          data={[data[selectedDay][selectedCondition]]}
          active={active}
          width={width}
          height={height}
          range={range}
        />
        <svg viewBox={`0 ${range[0]} 100 ${range[1]}`} preserveAspectRatio="none">
          {/* {data && <Line path={[data[selectedDay][selectedCondition]][0]} color={graphColor} />} */}
          {data && <Line path={[data[selectedDay][selectedCondition]][0]} color={graphColor} />}
        </svg>
        <div className="labels">
          {data[selectedDay].hours.map((label, i) => (
            <div
              key={label}
              style={
                {
                  '--x': `${(i * width) / (data[selectedDay].hours.length - 1)}px`,
                  '--y': `0px`,
                } as CSSProperties
              }
              className="text-white text-sm font-medium font-inter"
            >
              {String(label).length !== 2 ? '0' + label : label}
              <span className="hidden sm:inline">:00</span>
            </div>
          ))}
        </div>
        <Points
          data={[data[selectedDay][selectedCondition]]}
          width={width}
          height={height}
          setActive={setActive}
          range={range}
        />
      </div>
    </>
  );
};

export default Graph;
