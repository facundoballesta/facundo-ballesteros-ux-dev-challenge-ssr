import { Outlet } from "react-router-dom";
import { Header } from "../components/header/header";
import { MainLayout } from "../layout/mainLayout";
import style from "./appContainer.module.css";

export default function Root() {
    return (
        <div className={style.appContainer}>
            <Header />
            <MainLayout>
                <Outlet />
            </MainLayout>
        </div>
    );
}
