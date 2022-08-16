import {FunctionComponent} from "react";
import {NavigationBar} from "./components/view/NavigationBar";
import {
    BrowserRouter as Router,
    Outlet
} from "react-router-dom";
import {routes} from "./routes/routes";

export const Layout: FunctionComponent = () => {
    return (
    <>
        <NavigationBar/>
        <Outlet/>
    </>
    );
}