"use client";

import React, { useRef, useState } from "react";
import goal from "../../../../../public/goals.json";
import styles from "./styles/goals.module.scss";
import clsx from "clsx";
import { iD, useRead, useSet } from "@/hooks/Storage";
interface Goals {
  id: number;
  name: string;
  status: string;
}

const Goals = () => {
  const [onCreate, setOnCreate] = useState(false);
  const [onSet, setOnSet] = useState(false);

  const goalInput = useRef("");

  const [data, setData] = useState({});

  useSet(data as Goals, window, onSet);
  const readData = useRead(window);
  console.log(readData);

  return (
    <div className={clsx(styles.goals)}>
      <div className="flex justify-between">
        <h1 className="pl-2">Goals</h1>{" "}
        <button
          className="bg-background rounded-full shadow-primary shadow-[0px_0px_10px] text-center py-1 scale-50 w-fit px-4"
          onClick={() => {
            setOnCreate(!onCreate);
          }}
        >
          Create new
        </button>
      </div>

      {/* displaying goals */}
      <div className="p-3">
        <ul className={clsx("h-28 overflow-scroll overflow-x-hidden")}>
          {/* creating new goal */}
          {onCreate && (
            <li className="text-[.6rem] w-full flex justify-start gap-5">
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-0  border-0 border-b-2 border-primary focus:outline-none focus:ring-0 focus:border-primary-50 bg-transparent"
                  placeholder=" "
                  onChange={(txt) => {
                    goalInput.current = txt.target.value;
                  }}
                />
              </div>

              <button
                className={clsx(
                  "text-primary rounded-full text-[.7rem] scale-[.60] px-5 bg-primary-900 hover:bg-primary hover:text-primary-900 transition-colors active:text-primary active:bg-primary-900"
                )}
                onClick={() => {
                  setOnSet(!onSet);
                  setOnCreate(!onCreate);
                  setData({
                    id: iD(),
                    name: goalInput.current,
                    status: "pending",
                  });
                }}
              >
                set
              </button>
            </li>
          )}

          {goal.goals.map((goal) => (
            <li
              key={goal.id}
              className="text-[.6rem] w-full flex justify-between gap-5"
            >
              <div className="w-28">
                <p className="text-ellipsis overflow-hidden text-nowrap">
                  {goal.name}
                </p>{" "}
              </div>
              <div
                className={
                  goal.status == "completed"
                    ? clsx(
                        "text-success rounded-full text-[.7rem] scale-[.60] px-3 bg-success-50"
                      )
                    : clsx(
                        "text-danger rounded-full text-[.7rem] scale-[.60] px-3 bg-danger-50"
                      )
                }
              >
                <p>{goal.status}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Goals;
