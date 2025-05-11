"use client";

import React, { createContext, useState, useMemo } from "react";

interface Goals {
  id: string;
  name: string;
  cycle: number;
  status: string;
}

interface GoalContextType {
  isRunning: boolean;
  seconds: number;
  remainingSeconds: number;
  percent: number;
  defaultTime: number;
  breakTime: number;
  isBreakRunning: boolean;
  longBreakTime: number;
  cycles: number;
  defaultBreakTime: number;
  goalData: Goals[];
  goalID: string;
  defaultLongBreakTime: number;
}

interface GoalContextProps extends GoalContextType {
  setState: React.Dispatch<React.SetStateAction<GoalContextType>>;
}

const initialState: GoalContextType = {
  isRunning: false,
  seconds: 0,
  percent: 0,
  defaultTime: 5,
  remainingSeconds: 5,
  breakTime: 5,
  isBreakRunning: false,
  longBreakTime: 5,
  cycles: 0,
  defaultBreakTime: 5,
  goalData: [],
  goalID: "",
  defaultLongBreakTime: 5,
};

export const GoalContext = createContext<GoalContextProps | undefined>(
  undefined
);

export const GoalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<GoalContextType>(initialState);

  const contextValue = useMemo(
    () => ({
      ...state,
      setState,
    }),
    [state]
  );

  return (
    <GoalContext.Provider value={contextValue}>{children}</GoalContext.Provider>
  );
};
