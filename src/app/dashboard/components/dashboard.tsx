import Clock from "./clock";

const Dashboard = () => {
  return (
    <div className="pl-12 p-5">
      <p className="text-[1.2rem] text-foreground ">Time Manager</p>
      <Clock />
    </div>
  );
};

export default Dashboard;
