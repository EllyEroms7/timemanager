import React from "react";
import clsx from "clsx";
import styles from "./styles/clock.module.scss";
const Time = () => {
  return (
    <>
      <div className={clsx(styles.time, "gap-3")}>
        <div className="">
          <p>
            <span className="text-[.5rem]">Time elapsed</span>
            <br />
            <span className="text-[1.3rem]">00:12:00</span>
          </p>
        </div>

        <div className="mt-[3%]">
          <p>
            <span className="text-[.5rem]">Time remaining</span>
            <br />
            <span className="text-[1.3rem]">00:13:00</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Time;
