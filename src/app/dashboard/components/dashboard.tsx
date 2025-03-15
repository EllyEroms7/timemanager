import Focus from "./focus/focus";
import Goals from "./goals/goals";
import Clock from "./main/clock";
import Productivity from "./productivity/productivity";

const Dashboard = () => {
  return (
    <>
      <div className="fixed w-full pl-6 p-1 bg-background z-10">
        <p className="text-[1rem]  text-foreground  ">Pomodoro</p>
      </div>
      <div className="pl-12 p-5 pt-12 relative">
        <Clock />
        <div className="flex justify-between">
          <Productivity />
          <Focus />
          <Goals />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
