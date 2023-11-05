'use client';

import { CSSProperties, MouseEvent, useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../Context';

const Conditions = () => {
  const { selectedCondition, setSelectedCondition, setGraphColor } = useContext(Context) || {
    selectedCondition: 'tempature',
    setSelectedCondition: () => {},
    setGraphColor: () => {},
  };
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<{ left: number | null; width: number | null }>({
    left: null,
    width: null,
  });

  useEffect(() => {
    const element = parentRef.current?.querySelector('.active');
    if (element) {
      const { width } = element.getBoundingClientRect();
      const left = (element as HTMLElement).offsetLeft;
      setPosition({
        left,
        width,
      });
    }
  }, []);

  const handleConditionChange = (e: MouseEvent<HTMLButtonElement>, condition: ConditionType) => {
    const colors = {
      tempature: '#f7d500',
      feelsLike: '#f7d500',
      humidity: '#00B4DB',
      wind: '#acacac',
    };

    const { width } = e.currentTarget.getBoundingClientRect();
    const left = e.currentTarget.offsetLeft;

    setSelectedCondition(condition);
    setGraphColor(colors[condition]);
    setPosition({
      left,
      width,
    });
  };

  return (
    <div
      ref={parentRef}
      className="relative flex gap-2 mb-12 text-base overflow-y-hidden overflow-x-auto scroll-mt-10 sm:text-lg sm:gap-4 condition-scroll"
    >
      <div
        className="condition-selection bg-color-fourth"
        style={
          {
            '--l': `${position.left}px`,
            '--w': `${position.width}px`,
          } as CSSProperties
        }
      />
      <button
        className={`${position.width ? '' : 'backup'} ${selectedCondition === 'tempature' ? 'active' : ''}`}
        onClick={(e) => handleConditionChange(e, 'tempature')}
      >
        Sıcaklık
      </button>
      <button
        className={`${selectedCondition === 'feelsLike' ? 'active' : ''}`}
        onClick={(e) => handleConditionChange(e, 'feelsLike')}
      >
        Hissedilen
      </button>
      <button
        className={`${selectedCondition === 'humidity' ? 'active' : ''}`}
        onClick={(e) => handleConditionChange(e, 'humidity')}
      >
        Nem
      </button>
      <button
        className={`${selectedCondition === 'wind' ? 'active' : ''}`}
        onClick={(e) => handleConditionChange(e, 'wind')}
      >
        Rüzgar
      </button>
    </div>
  );
};

export default Conditions;
