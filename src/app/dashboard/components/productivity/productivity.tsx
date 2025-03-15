import styles from "./styles/productivity.module.scss";
import clsx from "clsx";

const Productivity = () => {
  return (
    <div className={clsx(styles.productivity)}>
      <div className="">
        <div className="title text-[.78rem]">
          <h1 className="">Productivity rate</h1>
        </div>

        <div className="w-full h-full py-5  ">
          <div className="main-rate h-fit bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent text-[4rem] drop-shadow-[0px_0px_10px_rgba(163,44,196,.5)] font-semibold overflow-visible text-center p-[1.5rem]">
            <h1>74%</h1>
          </div>
          <div className="flex justify-between text-left ml-3 flex-row-reverse">
            <div
              className={clsx(
                "text-[.7rem] scale-90 text-success border-success border-[2px] rounded-full p-2"
              )}
            >
              <p>+12%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productivity;
