import clsx from "clsx";
import styles from "./styles/clock.module.scss";

const Indicator = () => {
  return (
    <>
      {" "}
      <div className={clsx(styles.indicator, "gap-10")}>
        <div
          className="  flex
      justify-between
      gap-2
      item-start"
        >
          <div
            className={clsx(
              styles.completed,
              "rounded-full",
              "flex",
              "justify-center",
              "items-center"
            )}
          >
            <p className="flex gap-1 justify-center items-center">
              <span className="font-semibold text-background text-[1rem]">
                5
              </span>
              <span className="text-background text-[.65rem]"> completed</span>
            </p>
          </div>

          <div
            className={clsx(
              styles.pending,
              "rounded-full",
              "flex",
              "justify-center",
              "items-center"
            )}
          >
            <p className="flex gap-1 justify-center items-center">
              <span className="font-semibold text-primary text-[1rem]">10</span>
              <br />
              <span className="text-primary text-[.65rem]">pending</span>
            </p>
          </div>
        </div>

        <div className="break text-foreground flex justify-between items-center w-full ">
          <div className={clsx(styles.longBreak)}>
            <p>
              <span className="text-[.5rem]">Long Break</span>
              <br />
              <span className="text-[.8rem]">00:30:00</span>
            </p>
          </div>

          <div className={clsx(styles.shortBreak)}>
            <p>
              <span className="text-[.5rem]">Short Break</span>
              <br />
              <span className="text-[.8rem]">00:05:00</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Indicator;
