import styles from "./styles/productivity.module.scss";
import clsx from "clsx";

const Productivity = () => {
  return (
    <div
      className={clsx(
        styles.productivity,
        "p-8",
        "py-10",
        "w-full",
        "rounded-xl",
        "h-fit",
        "xl:min-h-[27rem]",
        "xl:w-[30%]"
      )}
    >
      <div className="">
        <div className="title text-[1.4rem] md:text-[2.1rem] md:p-3 md:pl-1">
          <h1 className="">Productivity rate</h1>
        </div>

        <div className="w-full h-full py-11  mt-10">
          <div className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent text-[6rem] md:text-[8rem] drop-shadow-[0px_0px_12px_rgba(163,44,196,.5)] font-semibold text-center p-[2.2rem] md:p-[3rem]">
            <div>74%</div>
          </div>

          <div className="flex justify-between text-left ml-3 mt-3 flex-row-reverse">
            <div
              className={clsx(
                "text-[1rem] scale-90 md:scale-100 md:text-[1.5rem] md:p-4 text-success border-success border-[2px] rounded-full p-2"
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
