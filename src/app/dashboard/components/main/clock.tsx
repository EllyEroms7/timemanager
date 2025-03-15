import clsx from "clsx";
import styles from "./styles/clock.module.scss";
import Indicator from "./indicator";
import Time from "./time";
import Progress from "./progress";

const Clock = () => {
  return (
    <div className="mt-[1.6%]">
      <div
        className={clsx(
          styles.card,
          "flex",
          "justify-between",
          "flex-wrap",
          "px-5"
        )}
      >
        <Indicator />
        <Time />
        <Progress />
      </div>
    </div>
  );
};

export default Clock;
