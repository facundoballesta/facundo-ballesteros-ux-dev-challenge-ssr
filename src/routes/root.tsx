import { Outlet } from "react-router-dom";
import { Header } from "../components/header/header";
import { MainLayout } from "../layout/mainLayout";

export default function Root() {
  return (
    <div className="app-container">
      <Header />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </div>
  );
}
