"use client";

import React, { useContext } from "react";
import { CircularProgress } from "@heroui/react";
import { GoalContext } from "../goalContext";
import { Icon } from "@iconify/react";

const Progress = () => {
  const context = useContext(GoalContext);
  if (!context) {
    throw new Error("use GoalContext must be used within a GoalProvider");
  }
  return (
    <div className="w-full lg:w-fit flex justify-center">
      <div className="flex flex-row-reverse w-fit">
        <div className="pt-2 pr-1 md:pt-4 md:pr-3">
          <div className="bg-background shadow-primary shadow-[0px_0px_10px_3px] w-10 h-10 md:w-fit md:h-fit flex justify-center items-center rounded-full hover:scale-105 transition-transform active:rotate-[180deg]">
            <button disabled={false} aria-label="Play or Pause">
              {false ? (
                <Icon
                  icon="solar:pause-broken"
                  style={{}}
                  className="w-[1.3rem] h-[1.3rem] md:w-[2rem] md:h-[2rem]"
                />
              ) : (
                <Icon
                  icon="solar:play-broken"
                  style={{
                    color: "hsl(var(--hero-primary))",
                  }}
                  className="w-[1.3rem] h-[1.3rem] md:w-[2rem] md:h-[2rem]"
                />
              )}
            </button>
          </div>
        </div>

        <CircularProgress
          showValueLabel={true}
          disableAnimation={false}
          size="lg"
          value={75}
          strokeWidth={4}
          aria-label="Progress indicator"
          classNames={{
            svg: "w-[16rem] h-[16rem] md:w-[23rem] md:h-[23rem] drop-shadow-[0_0_10px_rgba(168,49,196,.8)] shadow-primary",
            base: "relative",
            indicator: "stroke-primary",
            track: "stroke-foreground/10",
            value:
              "text-[3rem] md:text-[4.5rem] font-semibold text-transparent bg-gradient-to-r from-primary to-transparent  bg-clip-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          }}
        />
      </div>
    </div>
  );
};

export default Progress;
