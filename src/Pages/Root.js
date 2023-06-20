import { Outlet } from "react-router-dom";
import Navigation from "../UI/Navbar";

const Root = ()=> {
    return <>
    <Navigation></Navigation>
    <Outlet/>
    </>
}

export default Root