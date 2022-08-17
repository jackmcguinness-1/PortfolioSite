import { ReactNode } from "react";

import tw from "tailwind-styled-components";
import { IdePanel } from "../ide/IdePanel";

const Container = tw.div([
    "flex",
    "items-center",
    "justify-center",
    "flex-col",
    "w-full",
    "bg-grey-900",
]);

export const Home = () => {
    return(
    <Container>
      <IdePanel />
    </Container>
    );
}