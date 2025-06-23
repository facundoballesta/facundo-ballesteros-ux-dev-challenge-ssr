import {
  HomeIcon,
  EnvelopeIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

import styles from "./sidebar.module.css";
import clsx from "clsx";

export const Sidebar = () => {
  return (
    <nav className={clsx(styles.sidebar)}>
      <ul>
        <li>
          <NavLink to={`/`} className={styles.navigation}>
            <HomeIcon />
            <span> Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={`/messages`} className={styles.navigation}>
            <EnvelopeIcon />
            <span> Messages</span>
          </NavLink>
        </li>
      </ul>
      <button>
        <span>Collapse</span>
        <ChevronLeftIcon />
      </button>
    </nav>
  );
};
