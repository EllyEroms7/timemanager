import Image from "next/image";
import styles from "./main.module.scss";
import { clsx } from "clsx";
import Dashboard from "./components/dashboard";
import Nav from "./components/nav";

const DashboardPage = () => {
  return (
    <div className={clsx(styles.dashboard, "bg-background")}>
      <div className={clsx(styles.dashboardOverlay)}>
        <Image src="/image/trace.svg" alt="" fill className="object-cover" />
      </div>

      <div className="z-[1] relative">
        <Nav />
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardPage;
