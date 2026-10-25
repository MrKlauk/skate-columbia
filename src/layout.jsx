import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <main className="layout-main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;