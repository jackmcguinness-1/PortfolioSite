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
        name: "Contact",
        path: "/contact",
        element: <Layout/>,
        children: [
            {name: "Contact", index: true, element: <ContactPage/>}
        ]
    }
]