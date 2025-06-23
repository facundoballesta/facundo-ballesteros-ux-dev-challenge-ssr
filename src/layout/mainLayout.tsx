import React from "react";
import { Sidebar } from "../components/sidebar/sidebar";
import styles from "./mainLayout.module.css";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Sidebar />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};
