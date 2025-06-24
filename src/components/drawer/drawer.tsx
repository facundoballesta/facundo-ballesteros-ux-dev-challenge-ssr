import React, { useState } from "react";
import styles from "./drawer.module.css";
import StatusBadge from "../table/StatusBadge";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface DrawerProps {
    open: boolean;
    onClose: () => void;
    imageSrc?: string;
    imageAlt?: string;
    product: string;
    customer: string;
    status: import("../table/table").ProductStatusProps;
    date: string;
    amount: string;
    paymentMethod: string;
    id: number | string;
}

const Drawer: React.FC<DrawerProps> = ({
    open,
    onClose,
    imageSrc,
    imageAlt,
    product,
    customer,
    status,
    date,
    amount,
    paymentMethod,
    id,
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    return (
        <>
            <div className={styles.overlay} style={{ display: open ? "block" : "none" }} onClick={onClose} tabIndex={open ? 0 : -1} aria-hidden={!open} />
            <aside
                className={styles.drawer + (open ? " " + styles.open : "")}
                style={{
                    transform: open ? "translateX(0)" : "translateX(100%)",
                    willChange: "transform"
                }}
                aria-hidden={!open}
            >
                <div className={styles.header}>
                    {imageSrc && (
                        <div className={styles.image} style={{ position: "relative" }}>
                            {!imageLoaded && (
                                <div className={styles.loaderOverlay}>
                                    <div className={styles.loader} aria-label="Cargando imagen">
                                        <svg
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="16"
                                                cy="16"
                                                r="14"
                                                stroke="#888"
                                                strokeWidth="4"
                                                opacity="0.2"
                                            />
                                            <path
                                                d="M30 16a14 14 0 0 1-14 14"
                                                stroke="#888"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                            >
                                                <animateTransform
                                                    attributeName="transform"
                                                    type="rotate"
                                                    from="0 16 16"
                                                    to="360 16 16"
                                                    dur="1s"
                                                    repeatCount="indefinite"
                                                />
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            )}
                            <img
                                src={imageSrc}
                                alt={imageAlt || "Detalle de la orden"}
                                className={!imageLoaded ? styles.imgHidden : undefined}
                                onLoad={() => setImageLoaded(true)}
                            />
                        </div>
                    )}
                    <button
                        onClick={onClose}
                        aria-label="Cerrar"
                        className={styles.closeBtn}
                        tabIndex={open ? 0 : -1}
                        aria-hidden={!open}
                    >
                        <XMarkIcon className={styles.icon} />
                    </button>
                    <h2 className={styles.title}>{product}</h2>
                    <h3 className={styles.subtitle}>{customer}</h3>
                </div>
                <div className={styles.titles}></div>
                <div
                    className={styles.content}
                    aria-hidden={!open}
                    tabIndex={open ? 0 : -1}
                    aria-label="Detalle de la orden"
                >
                    <div className={styles.detailRow}>
                        <span>Status:</span>
                        <StatusBadge status={status} />
                    </div>
                    <div className={styles.detailRow}>
                        <span>Date:</span>
                        <span>{date}</span>
                    </div>
                    <div className={styles.detailRow}>
                        <span>Amount:</span>
                        <span>{amount}</span>
                    </div>
                    <div className={styles.detailRow}>
                        <span>Payment method:</span>
                        <span>{paymentMethod}</span>
                    </div>
                    <div className={styles.detailRow}>
                        <span>Transaction ID:</span>
                        <span>#{id}</span>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Drawer;
