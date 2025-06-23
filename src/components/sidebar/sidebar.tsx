import { NavButton } from "./buttons/NavButtons";
import CollapseButton from "./buttons/CollapseButton.tsx";

import styles from "./sidebar.module.css";
import clsx from "clsx";
import { EnvelopeIcon, HomeIcon } from "@heroicons/react/24/outline";

export const Sidebar = () => {
    return (
        <nav className={clsx(styles.sidebar)}>
            <ul>
                <li>
                    <NavButton to="/" icon={<HomeIcon />} label="Home" />
                </li>
                <li>
                    <NavButton to="/messages" icon={<EnvelopeIcon />} label="Messages" />
                </li>
            </ul>
            <CollapseButton />
        </nav>
    );
};
