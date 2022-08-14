import {RouteObject} from "react-router-dom";

import {Layout} from "../Layout";

import {Home} from "../components/view/Home";
import {ContactPage} from "../components/view/Contact" ;

interface NamedRouteObject extends RouteObject{
    name: String,
    children?: NamedRouteObject[]
}

export const routes: NamedRouteObject[] = [
    {
        name: "Index",
        path: "/",
        element: <Layout/>,
        children: [
            {name: "Home", index: true, element: <Home/>},
        ]
    },
    {
        name: "About Us",
        path: "/about_us",
        element: <Layout/>,
        children: [
            {name: "About Us", index: false, element: <ContactPage/>}
        ]
    }
]