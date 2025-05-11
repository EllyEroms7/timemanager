import Image from "next/image";
import styles from "./main.module.scss";
import { clsx } from "clsx";
import Dashboard from "./components/dashboard";

const DashboardPage = () => {
  return (
    <div className={clsx(styles.dashboard, "bg-background/85 min-h-screen")}>
      <div className={clsx(styles.dashboardOverlay, "z-[-1]")}>
        <Image src="/image/bg.webp" alt="" fill className="object-cover" />
      </div>
      <div className={clsx(styles.dashboardOverlay, "")}>
        <Image src="/image/trace.svg" alt="" fill className="object-cover" />
      </div>

      <div className="relative overflow-x-hidden min-h-screen">
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardPage;
