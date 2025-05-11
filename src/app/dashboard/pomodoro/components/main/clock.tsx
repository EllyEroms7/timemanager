import clsx from "clsx";
import styles from "./styles/clock.module.scss";
import Indicator from "./indicator";
import Time from "./time";
import Progress from "./progress";

const Clock = () => {
  return (
    <div className="mt-[1.6%] mb-5 xl:mb-0 xl:mt-0">
      <div
        className={clsx(
          styles.card,
          "min-h-fit",
          "p-[8%]",
          "py-[3rem] rounded-xl xl:p-[4%] xl:py-[2rem]",
          "2xl:h-[70vh]"
        )}
      >
        <div
          className={clsx(
            "flex",
            "justify-between",
            "items-center",
            "flex-col",
            "flex-wrap",
            "gap-4",
            "md:flex-row",
            "md:gap-[4rem]",
            "xl:gap-1",
            "xl:items-center",
            "xl:flex-row-reverse"
          )}
        >
          <Progress />
          <Time />
          <Indicator />
        </div>
      </div>
    </div>
  );
};

export default Clock;
