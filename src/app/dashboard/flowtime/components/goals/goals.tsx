"use client";

import React, { useContext, useRef } from "react";
import styles from "./styles/goals.module.scss";
import clsx from "clsx";
import { uid } from "uid/single";
import { GoalContext } from "../goalContext";
import { useRead } from "@/hooks/Storage";

interface Goals {
  id: string;
  name: string;
  status: string;
}

const Goals = () => {
  const context = useContext(GoalContext);
  const goalInput = useRef<string>("");
  if (!context) {
    throw new Error("Goals component must be used within a GoalProvider");
  }

  const readData = useRead();

  return (
    <div
      className={clsx(
        styles.goals,
        "p-7",
        "w-full",
        "h-fit max-h-[25rem]",
        "xl:h-[25rem]",
        "xl:w-[32%]"
      )}
    >
      <div className="flex justify-between">
        <h1 className="text-[1.7rem] md:text-[2.1rem] py-2 md:p-3 md:pl-1 md:pt-1">
          Goals
        </h1>
        <button className=" md:text-[1.2rem] text-center py-3 md:py-1 w-fit px-5 bg-background rounded-full shadow-primary shadow-[0px_0px_12px] hover:shadow-[0px_0px_26px] hover:shadow-primary transition-all active:bg-primary active:text-background">
          Create new
        </button>
      </div>

      <div className="p-3 h-full pt-10">
        <ul className={clsx("h-[90%] overflow-scroll overflow-x-hidden")}>
          {false && (
            <li
              className="text-[.6rem] w-full flex justify-start gap-5"
              key={uid()}
            >
              <p className="relative inline-block">
                <input
                  type="text"
                  className="w-full px-0 border-0 border-b-2 border-primary focus:outline-none focus:ring-0 focus:border-primary-50 bg-transparent"
                  placeholder="Enter goal name"
                  onChange={(txt) => {
                    goalInput.current = txt.target.value;
                  }}
                />
              </p>

              <button
                className={clsx(
                  "text-primary rounded-full text-[.7rem] scale-[.60] px-5 bg-primary-900 hover:bg-primary hover:text-primary-900 transition-colors active:text-primary active:bg-primary-900"
                )}
                key={uid()}
              >
                Set
              </button>
            </li>
          )}
          {readData.map((goal) => (
            <li
              key={uid()}
              className="text-[.6rem] w-full flex justify-between gap-5 "
            >
              <p
                className="text-ellipsis overflow-hidden text- w-28 inline-block"
                key={uid()}
              >
                {goal.name}
              </p>

              <p
                key={uid()}
                className={
                  goal.status === "completed"
                    ? clsx(
                        "text-success rounded-full text-[.7rem] scale-[.60] px-3 bg-success-50 inline-block "
                      )
                    : clsx(
                        "text-danger rounded-full text-[.7rem] scale-[.60] px-3 bg-danger-50 inline-block"
                      )
                }
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

export default Goals;
