import { FunctionComponent } from "react";

import {
    BrowserRouter as Router, 
    Route,
    Link
} from "react-router-dom";

import tw from "tailwind-styled-components";

import {Home} from "./Home";


const NavBarContainer = tw.nav([
    "flex",
    "bg-white",
    "border-gray-200",
    "px-2 ",
    "sm:px-4",
    "py-2.5",
    "rounded ",
    "dark:bg-gray-900",
])

const NavButtonContainer = tw.div([
    "w-auto",
    "m-auto",
    "p-0",
    "hover:bg-sky-700",
]);

export const NavigationBar: FunctionComponent = () => {
    return (
        <NavBarContainer>
            <NavButtonContainer>
                <Link to="/">Home</Link>
            </NavButtonContainer>
            <NavButtonContainer>
                <Link to="/contact">Contact Me</Link>
            </NavButtonContainer>
        </NavBarContainer>
    );
}