"use client";

import { useContext, useEffect, useRef } from "react";
import clsx from "clsx";
import styles from "./styles/clock.module.scss";
import { GoalContext } from "../goalContext";
import { useTimer } from "@/hooks/Timer";
import { useUpdate } from "@/hooks/Storage";
import { Goals } from "@/hooks/Storage";
const Time = () => {
  /**
   * CONTEXT
   */
  const context = useContext(GoalContext);
  if (!context) {
    throw new Error("Time component must be used within a GoalProvider");
  }
  const { isRunning, setState, goalID, defaultTime, cycles } = context;

  /**
   * TIMER
   */

  const { start, pause, format, remaining, elapsed, reset } =
    useTimer(defaultTime);

  const updatedData = useRef<Partial<Goals>>({});
  const updatedCycle = useRef<Partial<Goals>>({});
  const updatedStatus = useRef<Partial<Goals>>({});

  const updateItem = useUpdate() as (
    id: string | number,
    updatedFields: Partial<Goals>
  ) => Partial<Goals>;

  //Starts the timer
  useEffect(() => {
    if (isRunning) {
      start();

      //updates data in the storage and returns THE ENTIRE DATA
      updatedData.current = updateItem(goalID, {
        status: "progress",
        colour: "primary",
      });
    } else {
      pause();
    }
  }, [isRunning, pause, start, goalID, updateItem]);

  //handles time states and progress state so other component can have access
  useEffect(() => {
    if (cycles > 0) {
      setState((prev) => ({
        ...prev,
        remainingSeconds: remaining,
        seconds: elapsed,
        goalData: prev.goalData.map((datum) =>
          datum.id == prev.goalID ? { ...datum, ...updatedData.current } : datum
        ),
      }));
    }
  }, [elapsed, remaining, setState, cycles]);

  //handles cycles
  useEffect(() => {
    if (remaining === 0) {
      reset(); //resets the timer

      //updates data in the storage and returns /THE ENTIRE DATA
      updatedCycle.current = updateItem(goalID, {
        cycles: cycles - 1,
      });

      if (cycles > 0) {
        setState((prev) => ({
          ...prev,
          cycles: prev.cycles - 1,
          goalData: prev.goalData.map((datum) =>
            datum.id == prev.goalID
              ? { ...datum, ...updatedCycle.current }
              : datum
          ),
        }));
      }

      if (cycles <= 1) {
        updatedStatus.current = updateItem(goalID, {
          status: "completed",
          colour: "success",
        });

        //stops the timer
        setState((prev) => ({
          ...prev,
          isRunning: false,
          goalData: prev.goalData.map((datum) =>
            datum.id === prev.goalID
              ? { ...datum, ...updatedStatus.current }
              : datum
          ),
        }));
      }
    }
  }, [remaining, reset, setState, cycles, goalID, updateItem]);

  return (
    <div className={clsx(styles.time)}>
      <div className="flex flex-col gap-8 md:gap-[3.75rem]">
        <div className="p-3">
          <p className="text-[1.4rem] md:text-[2rem] pb-4">Time elapsed</p>
          <br />
          <p className={`text-[4rem] md:text-[5rem]`}>
            {format().elapsed.hrs}:{format().elapsed.mins}:
            {format().elapsed.secs}
          </p>
        </div>

        <div className="p-3">
          <p className="text-[1.4rem] md:text-[2rem] pb-4">Time remaining</p>
          <br />
          <p className="text-[3rem] md:text-[4rem]">
            {format().remaining.hrs}:{format().remaining.mins}:
            {format().remaining.secs}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Time;
