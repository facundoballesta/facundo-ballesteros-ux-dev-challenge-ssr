import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import style from "../sidebar.module.css";
interface CollapseButtonProps {
    collapsed: boolean;
    onClick: () => void;
}

const CollapseButton = ({ collapsed, onClick }: CollapseButtonProps) => (
    <button
        onClick={onClick}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        className={style.collapseButton}
    >
        <span>{collapsed ? "" : ""}</span>
        <ChevronLeftIcon style={{ transform: collapsed ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
    </button>
);

export default CollapseButton;
