'use client';

import { ReactNode, createContext, useState } from 'react';

const Context = createContext<
  | {
      selectedCondition: ConditionType;
      setSelectedCondition: (condition: ConditionType) => void;
      active: ActiveType;
      setActive: (active: ActiveType) => void;
      selectedDay: number;
      setSelectedDay: (day: number) => void;
      graphColor: string;
      setGraphColor: (color: string) => void;
    }
  | undefined
>(undefined);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCondition, setSelectedCondition] = useState<ConditionType>('tempature');
  const [selectedDay, setSelectedDay] = useState(0);
  const [active, setActive] = useState<ActiveType>({ path: 0, point: 0 });
  const [graphColor, setGraphColor] = useState<string>('#f7d500');

  return (
    <Context.Provider
      value={{
        active,
        setActive,
        selectedCondition,
        setSelectedCondition,
        selectedDay,
        setSelectedDay,
        graphColor,
        setGraphColor,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
