import clsx from "clsx";
import styles from "./styles/nav.module.scss";
import { Icon } from "@iconify/react";

const Nav = () => {
  return (
    <nav
      className={clsx(
        styles.nav,
        "md:h-screen",
        "md:w-fit",
        "bottom-0",
        "w-screen"
      )}
    >
      <div className="flex md:flex-col md:h-full md:gap-3 md:justify-end md:pb-3 md:px-0 justify-between items-center py-3 px-12">
        <div
          className="w-[2rem] h-[2rem] md:w-[1rem] md:h-[1rem] 2xl:w-[2vw] 2xl:h-[2vw]"
          style={{
            color: "hsl(var(--hero-foreground))",
          }}
        >
          <Icon icon="ic:round-dashboard" />
        </div>

        <div
          className="w-[2rem] h-[2rem] md:w-[1rem] md:h-[1rem] 2xl:w-[2vw] 2xl:h-[2vw]"
          style={{
            color: "hsl(var(--hero-foreground))",
          }}
        >
          <Icon icon="grommet-icons:task" />
        </div>

        <div
          className="w-[2rem] h-[2rem] md:w-[1rem] md:h-[1rem] 2xl:w-[2vw] 2xl:h-[2vw]"
          style={{
            color: "hsl(var(--hero-foreground))",
          }}
        >
          <Icon icon="tabler:settings-2" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
