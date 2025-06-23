import React from "react";
import styles from "./table.module.css";
import { CheckCircleIcon, ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline';

import type { ProductStatusProps } from "./table";

const StatusBadge: React.FC<{ status: ProductStatusProps }> = ({ status }) => {
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
  return (
    <span className={className + ' ' + styles.statusBadge}>
      {icon}
      <span>{status.toUpperCase()}</span>
    </span>
  );
};

export default StatusBadge;
