import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import styles from "./toggle.module.css";
import clsx from "clsx";

export const Toggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("darkMode") === "true");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
        localStorage.setItem("darkMode", isDarkMode.toString());
    }, [isDarkMode]);

    return (
        <div>
            <input
                type="checkbox"
                className={styles.checkbox}
                id="toggle"
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
            />
            <label htmlFor="toggle" className={styles.checkboxLabel}>
                <span className={styles.srOnly}>Toggle dark mode</span>
                <span
                    className={clsx(styles.ball, {
                        [styles.animation]: isDarkMode,
                    })}
                >
                    {isDarkMode ? <MoonIcon className={styles.moonIcon} /> : <SunIcon className={styles.sunIcon} />}
                </span>
                <span className={styles.placeholder}>
                    <MoonIcon className={styles.moonIcon} />
                    <SunIcon className={styles.sunIcon} />
                </span>
            </label>
        </div>
    );
};
