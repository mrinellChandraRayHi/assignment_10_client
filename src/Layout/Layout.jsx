import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";

const Layout = () => {
    return (
        <div>
            <div><Nav/></div>
            <div><Outlet/></div>
        </div>
    );
};

export default Layout;