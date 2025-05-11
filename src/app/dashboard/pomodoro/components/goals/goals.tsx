"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./styles/goals.module.scss";
import clsx from "clsx";
import { uid } from "uid/single";
import { GoalContext } from "../goalContext";
import { useDelete, useRead, useSet, Goals } from "@/hooks/Storage";

const GoalsDisplay = () => {
  const context = useContext(GoalContext);
  const goalInput = useRef<string>("");
  const cycleInput = useRef<string>("1");

  if (!context) {
    throw new Error("Goals component must be used within a GoalProvider");
  }

  /**
   * CONTEXT
   */
  const { goalData, setState } = context;

  /**
   * CREATING A NEW DATA
   */
  const [creating, setCreating] = useState(false);
  const save = useSet() as (data: Goals) => void;
  const readData = useRead();
  const deleteGoal = useDelete();

  /**
   * VALIDATION AND CREATION
   */

  const valid = () => {
    if (goalInput.current.trim() === "" || cycleInput.current.trim() === "") {
      setCreating(true); //show
    } else {
      const newGoal: Goals = {
        id: uid(),
        name: `${goalInput.current}`,
        cycles: Number(cycleInput.current),
        status: "pending",
        colour: "danger",
      };
      save(newGoal);

      setState((prev) => ({
        ...prev,
        goalData: [...prev.goalData, newGoal],
      }));

      setCreating(false); //hide
    }
  };

  /**
   * READING EXISTING DATA ON FIRST RENDER
   */
  useEffect(() => {
    setState((prev) => ({
      ...prev,
      goalData: readData,
    }));
  }, [readData, setState]);

  /**
   * DELETING EXISTING DATA
   */

  const trash = (id: string) => {
    const updatedData = deleteGoal(id) as Goals[];
    setState((prev) => ({
      ...prev,
      goalData: updatedData,
    }));
  };

  /**
   * PENDING DATA, COMPLETED DATA, GOAL ID, GOAL CYCLES
   */
  const pending = useRef<Goals[]>([]);
  const completed = useRef<Goals[]>([]);

  useEffect(() => {
    pending.current = goalData.filter((goal) => {
      if (goal.status === "pending" || goal.status === "progress") {
        return goal;
      }
    });
    completed.current = goalData.filter((goal) => {
      if (goal.status === "completed") {
        return goal;
      }
    });

    setState((prev) => ({
      ...prev,
      goalsPending: pending.current.length,
      goalsCompleted: completed.current.length,
      goalID: pending.current[0]?.id,
      cycles: pending.current[0] ? pending.current[0].cycles : 0,
    }));
  }, [goalData, setState]);

  /**
   * CONTROLLING GOAL STATUS
   */

  return (
    <div
      className={clsx(
        styles.goals,
        "p-7",
        "w-full",
        "h-fit max-h-[27rem]",
        "xl:h-[27rem]",
        "xl:w-[37%]"
      )}
    >
      <div className="flex justify-between">
        <h1 className="text-[1.7rem] md:text-[2.1rem] py-2 md:p-3 md:pl-1 md:pt-1">
          Goals
        </h1>
        <button
          className=" md:text-[1.2rem] text-center py-3 md:py-1 w-fit px-5 bg-background rounded-full shadow-primary shadow-[0px_0px_12px] hover:shadow-[0px_0px_26px] hover:shadow-primary transition-all active:bg-primary active:text-background"
          onClick={() => {
            setCreating(true);
            goalInput.current = "";
            cycleInput.current = "";
          }}
        >
          Create new
        </button>
      </div>

      <div className="p-3 h-full pt-10">
        <ul className={clsx("h-[90%] overflow-scroll overflow-x-hidden")}>
          {/* CREATING DATA */}
          {creating && (
            <li
              className="text-[1rem] w-full flex justify-between gap-11"
              key={uid()}
            >
              <p className="relative w-full flex gap-5">
                {/* cycles  */}
                <input
                  type="number"
                  min={1}
                  max={6}
                  className="w-[20%] text-center border-0 border-b-2 border-primary focus:outline-none focus:ring-0 focus:border-foreground bg-transparent"
                  placeholder="1"
                  onChange={(txt) => {
                    cycleInput.current = txt.target.value;
                  }}
                />

                <input
                  type="text"
                  className="w-[65%] px-0 border-0 border-b-2 border-primary focus:outline-none focus:ring-0 focus:border-foreground bg-transparent"
                  placeholder="Enter goal name"
                  onChange={(txt) => {
                    goalInput.current = txt.target.value;
                  }}
                />
              </p>

              <button
                className={clsx(
                  "text-primary rounded-full text-[.9rem] px-5 bg-background shadow-xl hover:bg-primary hover:text-primary-900 transition-colors active:text-primary active:bg-primary-900 p-2"
                )}
                onClick={valid}
                key={uid()}
              >
                Set
              </button>
            </li>
          )}

          {/* DISPLAY GOAL FROM EXISTING DATA */}
          {goalData.map((goal) => (
            <li
              key={uid()}
              className="text-[.6rem] xl:text-[1.3rem] w-full flex min-h-fit h-fit justify-between sm:gap-5 gap-4 mb-4 items-center"
            >
              <button className="text-[1.2rem]" onClick={() => trash(goal.id)}>
                🗑️
              </button>

              <p className="text-[1.2rem]">{goal.cycles}</p>

              <p
                className="text-ellipsis overflow-hidden text-[1.2rem] sm:text-[1.5rem] py-3 w-full inline-block text-nowrap"
                key={uid()}
              >
                {goal.name}
              </p>

              <p
                key={uid()}
                className={clsx(
                  `text-${goal.colour} rounded-full text-[.7rem] md:text-[1rem] px-3 py-2 bg-${goal.colour}-50 inline-block`
                )}
              >
                {goal.status}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GoalsDisplay;
