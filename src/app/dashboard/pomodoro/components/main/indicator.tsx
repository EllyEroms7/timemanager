"use client";

import clsx from "clsx";
import styles from "./styles/clock.module.scss";
import { useContext } from "react";
import { GoalContext } from "../goalContext";

const Indicator = () => {
  /**
   * CONTEXT
   */
  const context = useContext(GoalContext);
  if (!context) {
    throw new Error("Indicator must be used within a GoalProvider");
  }
  const { goalsCompleted, goalsPending } = context;

  return (
    <div className={clsx(styles.indicator)}>
      <div className="flex justify-between gap-8 mt-6 item-start flex-wrap">
        {/* Completed Count */}
        <div
          className={clsx(
            styles.completed,
            "rounded-full flex justify-center items-center py-[7%] px-[10%]"
          )}
        >
          <div className="flex gap-1 justify-center items-center ">
            <p className="font-semibold text-background text-[2rem] md:text-[2.7rem]">
              {goalsCompleted}
            </p>
            <p className="text-background text-[1.65rem] md:text-[2rem] ml-3">
              completed
            </p>
          </div>
        </div>

        {/* Pending Count */}
        <div
          className={clsx(
            styles.pending,
            "rounded-full flex justify-center items-center py-[7%] px-[10%]"
          )}
        >
          <div className="flex gap-1 justify-center items-center ">
            <p className="font-semibold text-primary text-[2rem] md:text-[2.7rem]">
              {goalsPending}
            </p>
            <p className="text-primary text-[1.65rem] md:text-[2rem] ml-3">
              pending
            </p>
          </div>
        </div>
      </div>

      {/* Break Timers */}
      <div className="break text-foreground flex justify-around items-start w-full mt-10 md:mt-16">
        <div className={clsx(styles.longBreak)}>
          <div>
            <p className="text-[1.2rem] md:text-[1.8rem] xl:text-[1.3rem]">
              Long Break
            </p>
            <br />
            <p className={`text-[1.6rem] md:text-[2.3rem] xl:text-[1.9rem]`}>
              00:00:00
            </p>
          </div>
        </div>

        <div className={clsx(styles.shortBreak)}>
          <div>
            <p className="text-[1.2rem] md:text-[1.8rem] xl:text-[1.3rem]">
              Short Break
            </p>
            <br />
            <p className={`text-[1.6rem] md:text-[2.3rem] xl:text-[1.9rem]`}>
              00:00:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Indicator;
