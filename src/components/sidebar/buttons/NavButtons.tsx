import { NavLink } from "react-router-dom";
import styles from "../sidebar.module.css";

interface NavButtonProps {
    to: string;
    icon: React.ReactNode;
    label: string;
    className?: string;
}

export const NavButton = ({ to, icon, label, className }: NavButtonProps) => (
    <NavLink to={to} className={styles.navigation}>
        {icon}
        <span> {label}</span>
    </NavLink>
);
