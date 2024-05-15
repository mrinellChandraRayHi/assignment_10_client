import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Layout = () => {
    return (
        <div>
            <div><Nav/></div>
            <div className="min-h-[calc(100vh-286px)]"><Outlet/></div>
            <div><Footer/></div>
        </div>
    );
};

export default Layout;