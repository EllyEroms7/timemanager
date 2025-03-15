import React from "react";
// import clsx from "clsx";
import { CircularProgress } from "@heroui/react";
const Progress = () => {
  return (
    <>
      <CircularProgress
        showValueLabel={true}
        disableAnimation={false}
        size="lg"
        value={75}
        strokeWidth={4}
        classNames={{
          svg: "w-36 h-36 drop-shadow-[0_0_10px_rgba(168,49,196,.8)] shadow-primary",
          base: "relative ",
          indicator: "stroke-primary",
          track: "stroke-foreground/10",
          value:
            "text-3xl font-semibold text-transparent bg-gradient-to-r from-primary to-transparent  bg-clip-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        }}
      />
    </>
  );
};

export default Progress;
