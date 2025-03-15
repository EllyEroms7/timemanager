import clsx from "clsx";
import styles from "./styles/focus.module.scss";

const Focus = () => {
  return (
    <div className={clsx(styles.focus)}>
      <div className="">
        <div className="title text-[.78rem]">
          <h1 className="">Today&apos;s focus</h1>
        </div>

        <div className="w-full h-fit py-5 px-3">
          <div
            className="main-focus bg-background shadow-primary shadow-[0px_0px_20px] text-center rounded-full py-7 px-[1.95rem] flex justify-center items-center mb-5"
            style={{
              lineHeight: "102%",
            }}
          >
            <h1>
              <span className="text-[1.35rem] font-semibold">12</span>
              <br />
              <span className="text-[.8rem]">hours</span>
            </h1>
          </div>

          <div className="border-success border-[1px] rounded-full px-3 scale-[.58] mt-6 text-left absolute bottom-0 left-0">
            <div className="flex justify-between items-center gap-3">
              <div className="px-1 py-1 rounded-full bg-success inline-block"></div>
              <div className="inline-block text-[.9rem]">Good</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Focus;
