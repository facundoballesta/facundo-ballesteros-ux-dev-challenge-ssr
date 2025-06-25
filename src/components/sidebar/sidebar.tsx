import { useState } from "react";
import { NavButton } from "./buttons/NavButtons";
import CollapseButton from "./buttons/CollapseButton.tsx";

import styles from "./sidebar.module.css";
import clsx from "clsx";
import { EnvelopeIcon, HomeIcon } from "@heroicons/react/24/outline";

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <nav className={clsx(styles.sidebar, collapsed && styles.collapsed)}>
            <CollapseButton collapsed={collapsed} onClick={() => setCollapsed((c) => !c)} />
            {!collapsed && (
                <ul>
                    <li>
                        <NavButton to="/" icon={<HomeIcon />} label="Home" />
                    </li>
                    <li>
                        <NavButton to="/messages" icon={<EnvelopeIcon />} label="Messages" />
                    </li>
                </ul>
            )}
        </nav>
    );
};
