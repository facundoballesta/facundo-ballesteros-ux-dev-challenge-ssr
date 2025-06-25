import React from "react";
import emptyOrders from "../../assets/img/empty-orders.svg";
import emptyMessages from "../../assets/img/empty-message.svg";
import styles from "./emptyPages.module.css";

interface EmptyPagesProps {
  orders?: boolean;
  messages?: boolean;
}

export const EmptyPages: React.FC<EmptyPagesProps> = ({ orders, messages }) => {
  if (orders) {
    return (
      <div className={styles.container}>
        <img src={emptyOrders} alt="No orders" className={styles.image} />
        <h2 className={styles.title}>No orders yet</h2>
        <p className={styles.subtitle}>There’s currently no orders placed</p>
      </div>
    );
  }
  if (messages) {
    return (
      <div className={styles.container}>
        <img src={emptyMessages} alt="No new messages" className={styles.image} />
        <h2 className={styles.title}>No new messages</h2>
        <p className={styles.subtitle}>There’s currently no new messages</p>
      </div>
    );
  }
  return null;
};
