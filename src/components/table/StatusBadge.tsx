import React from "react";
import styles from "./table.module.css";
import { CheckCircleIcon, ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline';

import type { ProductStatusProps } from "./table";

const StatusBadge: React.FC<{ status: ProductStatusProps; iconOnly?: boolean }> = ({ status, iconOnly = false }) => {
  let className = "";
  let icon = null;
  switch (status) {
    case "Approved":
      className = styles.statusSuccess;
      icon = <CheckCircleIcon className={styles.statusIcon} />;
      break;
    case "Pending":
      className = styles.statusWarning;
      icon = <ExclamationTriangleIcon className={styles.statusIcon} />;
      break;
    case "Rejected":
      className = styles.statusError;
      icon = <XMarkIcon className={styles.statusIcon} />;
      break;
    default:
      className = styles.statusDefault;
      icon = <span className={styles.statusIcon}>•</span>;
  }
  const badgeClass = `${className} ${styles.statusBadge}${iconOnly ? ' ' + styles.statusIconOnly : ''}`;
  return (
    <span className={badgeClass}>
      {icon}
      {!iconOnly && <span className={styles.statusText}>{status.toUpperCase()}</span>}
    </span>
  );
};

export default StatusBadge;
