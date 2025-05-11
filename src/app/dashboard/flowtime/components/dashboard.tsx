import Focus from "./focus/focus";
import { GoalProvider } from "./goalContext";
import Goals from "./goals/goals";
import Clock from "./main/clock";
import { Switch } from "./ui/switch";
import Productivity from "./productivity/productivity";
import localFont from "next/font/local";
import Footer from "./footer";

const quickSand = localFont({
  src: "../../../fonts/Quicksand.ttf",
  variable: "--font-quicksand",
  weight: "100 900",
});

const Dashboard = () => {
  return (
    <>
      <div className="w-screen pl-6 md:pl-8 p-3 md:p-5 xl:p-6 xl:px-3 bg-background z-10 flex items-center justify-between">
        <p
          className={`text-[1.5rem] md:text-[2.5rem] text-foreground ${quickSand.variable} w-fit pl-4 pt-1`}
        >
          Pomodoro
        </p>
        <Switch />
      </div>

      <div className="p-5 xl:pt-1">
        {/* This is the GoalProvider component */}

        <GoalProvider>
          {" "}
          <Clock />
          <div className="flex flex-wrap gap-5 justify-between flex-col-reverse xl:flex-row xl:gap-1 xl:pt-0">
            <Productivity />
            <Focus />
            <Goals />
          </div>
        </GoalProvider>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
