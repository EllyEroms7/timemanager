"use client";

import { useContext } from "react";
import clsx from "clsx";
import styles from "./styles/clock.module.scss";
import { GoalContext } from "../goalContext";

const Time = () => {
  const context = useContext(GoalContext);
  if (!context) {
    throw new Error("Time component must be used within a GoalProvider");
  }

  return (
    <div className={clsx(styles.time)}>
      <div className="flex flex-col gap-8 md:gap-[3.75rem]">
        <div className="p-3">
          <p className="text-[1.4rem] md:text-[2rem] pb-4">Time elapsed</p>
          <br />
          <p className={`text-[4rem] md:text-[5rem]`}>00:00:00</p>
        </div>

        <div className="p-3">
          <p className="text-[1.4rem] md:text-[2rem] pb-4">Time remaining</p>
          <br />
          <p className="text-[3rem] md:text-[4rem]">00:00:00</p>
        </div>
      </div>
    </div>
  );
};

export default Time;
