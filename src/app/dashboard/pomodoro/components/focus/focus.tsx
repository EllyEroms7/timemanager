import clsx from "clsx";
import styles from "./styles/focus.module.scss";

const Focus = () => {
  return (
    <div
      className={clsx(
        styles.focus,
        "p-9 rounded-xl h-full xl:w-[30%] xl:h-[27rem]"
      )}
    >
      <div className="my-4">
        <div className="title text-[1.78rem] md:text-[2.2rem]">
          <h1 className="">Today&apos;s focus</h1>
        </div>

        <div className="w-fit h-fit py-5 px-5 mx-auto mt-12">
          <div className="main-focus bg-background shadow-primary/50 shadow-[0px_0px_50px] text-center rounded-full py-16 px-[4.2rem] md:px-[5rem] md:py-[5.7rem]">
            <div>
              <p className="text-[2.35rem] md:text-[3.5rem] font-semibold">
                12
              </p>
              <br />
              <p className="text-[1.35rem] md:text-[2.5rem]">hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Focus;
