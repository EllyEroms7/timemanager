"use client";

import React, { createContext, useState, useMemo } from "react";

interface Goals {
  id: string;
  name: string;
  cycles: number;
  status: "pending" | "progress" | "completed";
  colour: "danger" | "primary" | "success";
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
  goalsPending: number;
  goalsCompleted: number;
  defaultLongBreakTime: number;
}

interface GoalContextProps extends GoalContextType {
  setState: React.Dispatch<React.SetStateAction<GoalContextType>>;
}

const initialState: GoalContextType = {
  //running
  isRunning: false,
  seconds: 0,
  percent: 0,
  defaultTime: 5,
  remainingSeconds: 5,
  cycles: 0,

  //break
  breakTime: 5,
  isBreakRunning: false,
  longBreakTime: 5,
  defaultLongBreakTime: 5,
  defaultBreakTime: 5,

  //data
  goalData: [],
  goalID: "",
  goalsPending: 0,
  goalsCompleted: 0,
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
