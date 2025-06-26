import React from "react";
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from "@heroicons/react/24/solid";
import styles from "./card.module.css";

export type CardResult = "positive" | "negative" | null;

interface CardProps {
    title: string;
    value: string;
    historicalAmount: string;
    result: CardResult;
}

const getIcon = (result: CardResult) => {
    if (result === "positive") {
        return <ArrowTrendingUpIcon className={styles.icon} style={{ color: "#4caf50" }} width={20} height={20} />;
    }
    if (result === "negative") {
        return <ArrowTrendingDownIcon className={styles.icon} style={{ color: "#f44336" }} width={20} height={20} />;
    }
    return null;
};

const Card: React.FC<CardProps> = ({ title, value, historicalAmount, result }) => {
    let borderClass = styles.neutral;
    if (result === "positive") borderClass = styles.positive;
    else if (result === "negative") borderClass = styles.negative;

    return (
        <div className={`${styles.card} ${borderClass}`}>
            <div className={styles.header}>
                <span className={styles.title}>{title}</span>
                {getIcon(result)}
            </div>
            <div className={`${styles.value} ${result === "negative" ? styles.valueNegative : ""}`}>{value || "-"}</div>
            <div className={styles.historical}>
                {title !== "Active Now" && "today "}
                {historicalAmount || "-"}
                {title == "Active Now" && " since last hour"}
            </div>
        </div>
    );
};

export default Card;
